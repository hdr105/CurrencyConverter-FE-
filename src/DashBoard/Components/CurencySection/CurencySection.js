import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const CurencySection = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [currencyName, setCurrencyName] = useState([]);
  const [currencyRate, setCurrencyRate] = useState([]);
  const [key, setKey] = useState(0)
  

// exchange rate API ................................
  useEffect(() => {
    checkRate()
  }, [])

  const checkRate = async () => {

    try {
      const res = await axios.get("http://localhost:5000/api/currency");
      setCurrencyName(Object.getOwnPropertyNames(res.data))
      setCurrencyRate(Object.values(res.data))
      console.log('new req',res);
      // setCurrency(res)
    } catch (error) {
     console.log(error); 
    }
  };
  
  // Calculate Total Fuction Data..........................................
  const getExchageRate = async(e) => {
    e.preventDefault()
    try {
     const rate = amount * currencyRate[key]
     setCurrency(rate)
     Swal.fire({
      title: `${amount} AUD = ${rate + " " + currencyName[key]}`,
      confirmButtonColor: "#F8214B",

    })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-md-12">
      <div className="exchange-portion ">
        <form onSubmit={getExchageRate}>
        <div className=" row g-3 align-items-center d-flex">
          <div className="col-md-4">
            <label
              htmlFor="inputPassword6"
              className="col-form-label currency-label"

            >
              Amount
            </label>
            <input
            required
              type="number"
              inputMode="decimal"
              placeholder="Enter Amount In Numbers"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className=" form-control amount-input__NumberInput-sc-1gq6pic-1 "
            />
          </div>
          <div className="col-md-4">
            <label
              htmlFor="inputPassword6"
              className="col-form-label currency-label"
            >
              From
            </label>
            <select id="country" name="country" className=" form-control">
              <option value="" selected>
                AUD
              </option>
            </select>
          </div>
          <div className="col-md-4">
            <label
              htmlFor="inputPassword6"
              className="col-form-label currency-label"
            >
              To
            </label>
            <select name="country" className=" form-control" onChange={(e)=>{
              setKey(e.target.value)
            }}>
            {
              currencyName.map((currency, key)=>{
                return(
                <>
                  <option value={key}>{currency}</option>
                </>
                )
              })
            }
             </select>
        
          </div>
        </div>
        <div className="justify-content-end d-flex  mt-5">
         
          <button type="submit" className=" btn btn-primary">
            Convert
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CurencySection;
