import React, { useEffect } from 'react'

const Buttons: React.FC = () => {
  let text : HTMLTextAreaElement

  const lowerCase = (): void => {
    text.value = text.value.toLowerCase()
  }

  const upperCase = (): void => {
    text.value = text.value.toUpperCase()
  }

  const alternateCase = (): void => {
    if (text.value.charAt(0) === text.value.charAt(0).toLowerCase()) {
      text.value = text.value.split('').map((character: string, i: number) => {
        return (i % 2 === 0) ? character.toUpperCase() : character.toLowerCase()
      }).join('')
    } else {
      text.value = text.value.split('').map((character: string, i: number) => {
        return (i % 2 === 0) ? character.toLowerCase() : character.toUpperCase()
      }).join('')
    }
  }

  const upperFirstLetterCase = (): void => {
    text.value = text.value.split(' ').map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
  }

  const inverseCase = (): void => {
    text.value = text.value.split('').reverse().join('')
  }

  const copyCase = (): void => {
    text.select()
    document.execCommand('copy')
    // window.getSelection()?.removeAllRanges()

    const alert: HTMLDivElement = document.getElementById('alert') as HTMLDivElement
    alert.textContent = 'successfully copied'
    alert.style.opacity = '1'
    setTimeout(() => { alert.style.opacity = '0' }, 2000)
  }

  const clearCase = (): void => {
    text.value = ''
  }

  const style = {
    width: '250px',
    color: '#DDDDDD'
  }

  useEffect(() => {
    text = document.getElementById('text-area') as HTMLTextAreaElement
  }, [])

  return (
    <div>
      <div className="container p-5">
        <div className="row row-cols-auto justify-content-center">
          <div className="col mb-1">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={lowerCase}
              style={style}
            >
              lowercase
            </button>
          </div>
          <div className="col mb-1">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={upperCase}
              style={style}
            >
              UPPERCASE
            </button>
          </div>
          <div className="col mb-1">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={alternateCase}
              style={style}
            >
              AlTeRnAtE
            </button>
          </div>
          <div className="col mb-1">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={upperFirstLetterCase}
              style={style}
            >
              Upper First
            </button>
          </div>
          <div className="col mb-1">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={inverseCase}
              style={style}
            >
              Inverse / Esrevni
            </button>
          </div>
          <div className="col mb-1">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={copyCase}
              style={style}
            >
              Copy
            </button>
          </div>
          <div className="col mb-1">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onClick={clearCase}
              style={style}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buttons
