from functools import reduce

sum = reduce(lambda a, x: a + x, [0, 1, 2, 3, 4])
print(sum)

sentences = ['Mary read a story to Sam and Isla.',
             'Isla cuddled Sam.',
             'Sam chortled.']

sam_count = 0
for sentence in sentences:
    sam_count += sentence.count('Sam')

print(sam_count)

# Same code rewritten as a reduce
sam_count = reduce(lambda a, x: a + x.count('Sam'),
                   sentences,
                   0)

print(sam_count)
