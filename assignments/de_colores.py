# TODO:
# Return the character with the highest count for each item
# Return the character with the highest count overall

def character_count(colors_arr):
  for x in range(0, len(colors_arr)):
    get_color_hash(colors_arr[x])

def get_color_hash(color):
  color_ct = {}
  for x in range(0,len(color)):
    if color[x] in color_ct.keys():
      color_ct[color[x]] += 1
    else:
      color_ct[color[x]] = 1
  print(color_ct)

character_count(["red", "purple", "yellow"])