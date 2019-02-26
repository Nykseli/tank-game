import json

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

def create_data_file(filename, data):
    ''' creates file to html/tankdata '''
    if type(data) == dict or type(data) == list:
        data = json.dumps(data)

    with open("html/tankdata/" + filename, "w") as datafile:
        datafile.write(data)

def print_json(json_dict):
    print(json.dumps(json_dict))
