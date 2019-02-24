def is_pixel_black(pixel):
    ''' Checks if pixel rbg is 0, 0, 0 (black) '''
    # Check red value
    if pixel[0] is not 0:
        return False
    # Check blue value
    if pixel[1] is not 0:
        return False
    # Check green value
    if pixel[2] is not 0:
        return False

    return True
