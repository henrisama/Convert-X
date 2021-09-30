import React from 'react'

const PaypalButton: React.FC = () => {
  return (
    <div>
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="business" value="pedropiresflores@icloud.com" />
            <input type="hidden" name="no_recurring" value="1" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
        </form>
    </div>
  )
}

export default PaypalButton
