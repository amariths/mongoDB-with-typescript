import AnimalModel, { AnimalType } from './animalSchema'

export const createAnimal = async (animal: AnimalType) => {
    const newAnimal = new AnimalModel(animal)
    await newAnimal.save()
    return newAnimal
}


export const getAnimals =  async () => {
    const Animals = await AnimalModel.find()
    //Animals.find((item) => console.log(item.id))
    //console.log(Animals.i)
   return Animals
}

export const getAnimalsById =  async (id: string) => {
    const Animals = await AnimalModel.findById(id)
   return Animals
}

export const deleteAnimal =  async (id: string) => {
    const Animals = await AnimalModel.deleteOne({_id: id})
    console.log(Animals)
   return Animals
}
