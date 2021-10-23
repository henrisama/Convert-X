import {
  kilogramsToGrams,
  poundsToGrams,
  ouncesToGrams,
  stonesToGrams,
  gramsToKilograms,
  gramsToPounds,
  gramsToOunces,
  gramsToStones
} from '../Functions'

interface Props {
  selectOne: HTMLSelectElement,
  selectTwo: HTMLSelectElement,
  inputOne: HTMLInputElement,
  inputTwo: HTMLInputElement
}

const anyToGrams = (value: string, input: number, props: Props): number => {
  let grams: number
  let inputValue: number
  const { inputOne, inputTwo } = props

  if (input === 1) {
    inputValue = parseFloat(inputOne.value)
  } else if (input === 2) {
    inputValue = parseFloat(inputTwo.value)
  }

  switch (value) {
    case 'grams':
      grams = inputValue
      break
    case 'kilograms':
      grams = kilogramsToGrams(inputValue)
      break
    case 'pounds':
      grams = poundsToGrams(inputValue)
      break
    case 'ounces':
      grams = ouncesToGrams(inputValue)
      break
    case 'stones':
      grams = stonesToGrams(inputValue)
      break
    default:
      break
  }

  return grams
}

const inputOneChange = (props: Props) => {
  const { selectOne, selectTwo, inputTwo } = props
  const grams: number = anyToGrams(selectOne.value, 1, props)

  switch (selectTwo.value) {
    case 'grams':
      inputTwo.value = grams.toString()
      break
    case 'kilograms':
      inputTwo.value = gramsToKilograms(grams).toString()
      break
    case 'pounds':
      inputTwo.value = gramsToPounds(grams).toString()
      break
    case 'ounces':
      inputTwo.value = gramsToOunces(grams).toString()
      break
    case 'stones':
      inputTwo.value = gramsToStones(grams).toString()
      break
    default:
      break
  }
}

const inputTwoChange = (props: Props) => {
  const { selectOne, selectTwo, inputOne } = props
  const grams: number = anyToGrams(selectTwo.value, 2, props)

  switch (selectOne.value) {
    case 'grams':
      inputOne.value = grams.toString()
      break
    case 'kilograms':
      inputOne.value = gramsToKilograms(grams).toString()
      break
    case 'pounds':
      inputOne.value = gramsToPounds(grams).toString()
      break
    case 'ounces':
      inputOne.value = gramsToOunces(grams).toString()
      break
    case 'stones':
      inputOne.value = gramsToStones(grams).toString()
      break
    default:
      break
  }
}

const onSelectChange = (event: any): void => {
  const selectOne: HTMLSelectElement = document.getElementById('select-one') as HTMLSelectElement
  const selectTwo: HTMLSelectElement = document.getElementById('select-two') as HTMLSelectElement

  const inputOne: HTMLInputElement = document.getElementById('input-one') as HTMLInputElement
  const inputTwo: HTMLInputElement = document.getElementById('input-two') as HTMLInputElement

  const props = {
    selectOne: selectOne,
    selectTwo: selectTwo,
    inputOne: inputOne,
    inputTwo: inputTwo
  }

  switch (event.target.id) {
    case 'select-one':
      if (inputTwo.value === undefined) { return }
      inputTwoChange(props)
      break
    case 'select-two':
      if (inputOne.value === undefined) { return }
      inputOneChange(props)
      break
    case 'input-one':
      if (inputOne.value === undefined) { return }
      inputOneChange(props)
      break
    case 'input-two':
      if (inputTwo.value === undefined) { return }
      inputTwoChange(props)
      break
    default:
      break
  }
}

export default onSelectChange
