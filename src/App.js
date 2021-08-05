import "./styles.css";
import React, {useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typrography from '@material-ui/core/Typography';
import { Table, TableCell, TableRow } from '@material-ui/core';
import Tables from './Table'

const Sliderpart = withStyles({
  root:{color:"blue", height:10},
  thumb:{height:25,width:25, backgroundColor:'white',border:'3px solid black', marginTop: -9, marginleft:-9},
  track:{height:10,borderRadius:4},
  rail: {height:10,borderRadius:4},
})(Slider);

export default function App() {

  const[amt,setAmt]=useState(3755000);
  const[inst,setInst]=useState(7);
  const [duration,setDuration] = useState(147);
  const maxValue=9000000;
  const intMax=25;
  const maxDuration=360;

  const intr = inst/1200;
  const emi = duration ? Math.round(amt * intr / (1-(Math.pow(1/(1+intr),duration)))) : 0;
  const total = duration *emi;
  const totalamtCredit = Math.round((emi/intr)*(1-Math.pow((1 + intr),(-duration))));
  const totalamtofIntr = Math.round(total-totalamtCredit)

  return (
    <div className="App">
      <div className="calapp">
        <h2 className="heading"><u>EMI CALCULATOR</u></h2>
        <div>
          <Typrography gutterBottom>LOAN AMOUNT</Typrography>
          <Sliderpart value={amt} onChange={(event,Amt)=>{setAmt(Amt)}} defaultValue={amt} max={maxValue}/>

          </div>
           <div>
          <Typrography gutterBottom>INTEREST RATE %</Typrography>
          <Sliderpart value={inst} onChange={(event,Inst)=>{setInst(Inst)}} defaultValue={inst} max={intMax}/>
          </div>
          <div>
          <Typrography gutterBottom>TENURE(MONTHS)</Typrography>
          <Sliderpart value={duration} onChange={(event,Duration)=>{setDuration(Duration)}} defaultValue={duration} max={maxDuration}/>
          </div>
          <div>
            <Table>
              <TableRow>
                <TableCell>
                  <Tables amt={amt} inst={inst} total={total} duration={duration} emi={emi} totalamtofIntr={totalamtofIntr}/>
                  </TableCell>
                  </TableRow>
                  </Table>
                  </div>
          </div>
          </div>
  );
}
