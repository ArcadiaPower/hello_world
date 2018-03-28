# TODO:
# Return multiples in the case of ties
import operator
def character_count(colors_arr):
  max_char_list = []
  for x in range(0, len(colors_arr)):
    color_hash = get_color_hash(colors_arr[x])
    max_char_list.append(color_hash)
  print(max_char_list)
  get_max_overall(max_char_list)


def get_max_overall(list):
  char_max = 0
  max_char = []
  for x in range(0,len(list)):
      if list[x].values()[0] > char_max:
        char_max = list[x].values()[0]
  print max_char

def get_color_hash(color):
  color_ct = {}
  for x in range(0,len(color)):
    if color[x] in color_ct.keys():
      color_ct[color[x]] += 1
    else:
      color_ct[color[x]] = 1
  print(color_ct)
  key, value = max(color_ct.iteritems(), key=lambda x:x[1])
  return {key: value}

character_count(["red", "purple", "yellow"])