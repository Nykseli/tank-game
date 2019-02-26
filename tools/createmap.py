import os
import sys

import helper

from PIL import Image




def get_pixels_from_image(img_path):
    '''
    Load image to 2d matrix that represents the tank shape.
    The shape is the black pixels in the image
    [[x, y], [x, y]] etc
    '''
    img_obj = Image.open(img_path)
    img_w, _ = img_obj.size

    # # Image must be 50 pixels times 50 pixels
    # if img_w is not 50 or img_h is not 50:
    #     txt = "Image needs to be 50x50. Is {}x{}".format(img_w, img_h)
    #     raise Exception(txt)


    # Pixel array from image is in 1d array
    one_d_list = list(img_obj.getdata())
    two_d_list = []
    for index in range(len(one_d_list)):
        # Ignore all the pixels that are not black
        if not helper.is_pixel_black(one_d_list[index]):
            continue
        # y_pos is calculated by divideing the index by image width
        # for example if index is 216, the y position is 4
        y_pos = int(index / img_w)
        # x_pos is the modulus of index divided by widh
        # for example if index is 216, the x position is  16 since 216 % 50 == 16
        x_pos = index % img_w
        two_d_list.append([x_pos, y_pos])


    return two_d_list

def print_usage():
    print("usage: pyton tools/createmap.py 'level|background'")
    sys.exit(1)

def sortmap(mapdata):
    mapdata.sort(key=lambda x: x[0])


if __name__ == '__main__':

    if len(sys.argv) == 2 :
        if sys.argv[1] == "level":
            pixel_list = get_pixels_from_image("tankimg/level_main.png")
            sortmap(pixel_list)
            helper.create_data_file("level_main.json", pixel_list)
        elif sys.argv[1] == "background":
            pixel_list = get_pixels_from_image("tankimg/level_background.png")
            sortmap(pixel_list)
            helper.create_data_file("level_background.json", pixel_list)
        else:
            print_usage()
    else:
        print_usage()
