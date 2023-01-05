import os
from PIL import Image
files = os.listdir("./src/Images")
print(files)

for file in files:
    if("avif" in file): continue
    img = Image.open("./src/Images/"+file)
    img.save( "./src/Images/" + file.split(".")[0] + ".webp", format = "webp")