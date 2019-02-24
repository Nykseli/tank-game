from PIL import Image


from helper import is_pixel_black


def get_pixels_from_image(img_path):
    '''
    Load image to 2d matrix that represents the tank shape.
    The shape is the black pixels in the image
    [[x, y], [x, y]] etc
    '''
    img_obj = Image.open(img_path)
    img_w, img_h = img_obj.size

    # # Image must be 50 pixels times 50 pixels
    # if img_w is not 50 or img_h is not 50:
    #     txt = "Image needs to be 50x50. Is {}x{}".format(img_w, img_h)
    #     raise Exception(txt)


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

pixel_list = get_pixels_from_image("tankimg/level_main.png")

pixel_list.sort(key=lambda x: x[0])


print(str(len(pixel_list)))
print(str(pixel_list))
