from functools import reduce
from operator import add

people = [{'name': 'Mary', 'height': 160},
          {'name': 'Isla', 'height': 80},
          {'name': 'Sam'}]

height_tot = 0
height_count = 0
for person in people:
    if 'height' in person:
        height_tot += person['height']
        height_count += 1

if height_count > 0:
    average_height = height_tot / height_count

    print(average_height)

heights = map(lambda x: ['height'],
              filter(lambda x: 'height' in x, people))

if len(list(heights)) > 0:
    avg_height = reduce(add, heights) / len(list(heights))

print(list(avg_height))
