str = "i am a student";  
print(str);    
for x in str :    #count the char
  print(x);


space = 0;        #count the word
for x in str:
  if x == " " :
   space += 1 
  word = space + 1
print (word)



str = input()         #user input
print(str)


str = "  i am a student  "    #if your spaces are outside the word
word = str.split()
word_count = len(word)
print(word_count)


