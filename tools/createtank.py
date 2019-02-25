
from PIL import Image

from helper import is_pixel_black, print_json


def get_pixels_from_image(img_path):
    '''
    Load image to 2d matrix that represents the tank shape.
    The shape is the black pixels in the image
    [[x, y], [x, y]] etc
    '''
    img_obj = Image.open(img_path)
    img_w, img_h = img_obj.size

    # Image must be 50 pixels times 50 pixels
    if img_w is not 50 or img_h is not 50:
        txt = "Image needs to be 50x50. Is {}x{}".format(img_w, img_h)
        raise Exception(txt)


    # Pixel array from image is in 1d array
    one_d_list = list(img_obj.getdata())
    two_d_list = []
    for index in range(len(one_d_list)):
        # Ignore all the pixels that are not black
        if not is_pixel_black(one_d_list[index]):
            continue
        # y_pos is calculated by divideing the index by image width
        # for example if index is 216, the y position is 4
        y_pos = int(index / img_w)
        # x_pos is the modulus of index divided by widh
        # for example if index is 216, the x position is  16 since 216 % 50 == 16
        x_pos = index % img_w
        two_d_list.append([x_pos, y_pos])


    return two_d_list

def translate_pixels(pixels):
    for index in range(len(pixels)):
        if pixels[index][0] < low_x:
            low_x = pixels[index][0]
        if pixels[index][0] > high_x:
            high_x = pixels[index][0]
        if pixels[index][1] < low_y:
            low_y = pixels[index][1]
        if pixels[index][1] > high_y:
            high_y = pixels[index][1]
    return pixels

def get_tank_info(img_path):
    info = {"width": 0, "height": 0, "pixels": [], "bottomlength": 0, "bottompixel": []}
    two_d_p = get_pixels_from_image(img_path)

    low_y = 50
    low_x = 50
    high_y = 0
    high_x = 0

    for index in range(len(two_d_p)):
        if two_d_p[index][0] < low_x:
            low_x = two_d_p[index][0]
        if two_d_p[index][0] > high_x:
            high_x = two_d_p[index][0]
        if two_d_p[index][1] < low_y:
            low_y = two_d_p[index][1]
        if two_d_p[index][1] > high_y:
            high_y = two_d_p[index][1]


    for index in range(len(two_d_p)):
        two_d_p[index][0] -= low_x
        two_d_p[index][1] -= low_y


    info["width"] = high_x - low_x
    info["height"] = high_y - low_y
    info["pixels"] = two_d_p

    for index in range(len(two_d_p)):
        if two_d_p[index][1] == info["height"]:
            info['bottomlength'] += 1
            info['bottompixel'].append(two_d_p[index])


    return info

tank_data = get_tank_info("tankimg/tank2.png")

tank_data['pixels'].sort(key=lambda x: x[0])

# print("Tank pixel size: " + str(len(get_pixels_from_image("tankimg/tank.png"))))
#print(str(tank_data))
print_json(tank_data)
