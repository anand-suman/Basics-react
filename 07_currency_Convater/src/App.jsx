import { useState } from 'react';
import { InputUi_Box } from './add_component';
import useCurrencyInfo from './custom_hook/useCurrencyinfo';


function App() {
    // console.log("mai chal rha hu 1st div")
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convetedAmount, setConvetedAmount] = useState(0)

  const currencycInfo = useCurrencyInfo(from)

  const options = currencycInfo ? Object.keys(currencycInfo) : []

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvetedAmount(amount);
    setAmount(convetedAmount)
  }

  const convert = () => {
    setConvetedAmount(amount * currencycInfo[to])
  }

  return (
    
     <div className='w-full h-screen flex flex-wrap justify-center items-center bg-no-repeat bg-cover bg-center'
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
      >

       


          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            

                






          
  <div className="w-full  justify-center max-w-md bg-lime-200 p-6 rounded-lg shadow-md flex flex-col items-center my-2">
    <h1 className="text-2xl font-bold mb-1">Currency Converter</h1>
    
  </div>









          
            <form
            onClick = { (e) => {
                e.preventDefault();
                convert();
            }}
        >
                      <div className='w-full mb-1'>
                          <InputUi_Box
                            label = "From"
                            amount={amount}
                            currencyOption={options}
                            currencyChange={ (currecy) => setFrom(currecy)}
                            selectCurrency= {from}
                            amountChange={(amount) => setAmount(amount)}
                          />
                      </div>

                      <div className='relative w-full h-0.5'>
                        <button
                          type='button'
                          className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                          onClick={swap}
                        >
                          swap
                        </button>
                      </div>

                      <div className='w-full mb-1'>
                          <InputUi_Box
                            label = "To"
                            amount={convetedAmount}
                            currencyOption={options}
                            currencyChange={ (currecy) => setTo(currecy)}
                            selectCurrency= {to}
                            amountDisable
                          />
                      </div>
                          
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
        </form>
          </div>

      </div>

  );
}

export default App
