import os
path = '/Users/RED/Desktop/This is RED/Other Code/Car-dealerShip-React/React App/public/images'

files = os.listdir(path)

generateCars = []

def noSpace(file):
    return file.replace(" ", "_")
#print(noSpace("Aston Martin Vantage.png"))

for index, file in enumerate(files):
    #os.rename(os.path.join(path, file), os.path.join(path, noSpace(file)))
    generateCars.append(f'"{file}",')

for i in generateCars:
    print(i)
