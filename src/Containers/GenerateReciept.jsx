import React, { useEffect, useState, useRef } from "react";
import Layout from "../Components/Layout";
import { Box, Img, Input, Text } from "@chakra-ui/react";
import PrintReceiptButton from "../Containers/pbtn";
import { useLocation } from "react-router-dom";
import "../Containers/GenerateReciept.css";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const GeneratedReciept = () => {
  const location = useLocation();

  function Barcode({ value }) {
    const svgRef = useRef(null);

    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/barcodes/JsBarcode.code128.min.js";
      script.async = true;
      script.onload = () => {
        if (window.JsBarcode) {
          window.JsBarcode(svgRef.current, location.state.invb, {
            format: "CODE128",
            displayValue: true,
            fontSize: 18,
          });
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [value]);

    return (
      <img
        ref={svgRef}
        style={{
          height: "45.8pt",
          width: "200.4pt",
          borderWidth: "1px solid blue ",
        }}
      ></img>
      //   <img src="../images/barcode.png" style={{height:"45.8pt",width:"200.4pt",borderWidth:"1px solid blue "}}></img>
    );
  }

  function Barcodec({ value }) {
    const svgRef = useRef(null);

    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/barcodes/JsBarcode.code128.min.js";
      script.async = true;
      script.onload = () => {
        if (window.JsBarcode) {
          window.JsBarcode(svgRef.current, location.state.Cus_Idp, {
            format: "CODE128",
            displayValue: true,
            fontSize: 18,
          });
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [value]);

    return (
      <img
        ref={svgRef}
        style={{
          height: "45.8pt",
          width: "200.4pt",
          borderWidth: "1px solid blue ",
        }}
      ></img>
      //   <img src="../images/barcode.png" style={{height:"45.8pt",width:"200.4pt",borderWidth:"1px solid blue "}}></img>
    );
  }

  // console.log(location.state.invb);
  // console.log(location.state.ActualDate);
  console.log("items data from previous page ");
  console.log(location.state.invitemsdt.invitem);
  console.log("items data from previous page ");

  console.log(location.state.Tender_Amount);
  console.log("************************");
  console.log(location.state.Tender_Type);
  console.log("************************");
  let ta = location.state.Tender_Amount;
  let tt = location.state.Tender_Type;


  let items = location.state.invitemsdt.invitem;
  let cusfname = location.state.CusFirstName;
  let cuslname = location.state.CustLastName;
  const [isPrinting, setIsPrinting] = useState(false);

  // get a new date (locale machine date time)
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  // get the time as a string
  var time = today.toLocaleTimeString();

  // log the date in the browser console
  console.log("date:", formattedToday);
  // log the time in the browser console
  console.log("time:", time);

  const printItems = () => {
    setIsPrinting(true);
    setIsPrinting(true);

    setTimeout(function () {
      window.print();
    }, 500);
  };

  return (
    <>
      <table
        style={{
          borderWidth: "0px",
          width: "209.7pt",
          borderCollapse: "collapse",
        }}
      >
        {/* MAIN LOGO */}
        <tr style={{ height: "40pt" }}>
          <td
            className="sc4540588"
            colSpan="78"
            style={{ height: "80pt", width: "200pt", border: "0px" }}
          >
            <img
              src="../images/recieptimages/logo.png"
              style={{ height: "80pt", width: "200pt", borderWidth: "0px" }}
            ></img>
          </td>
        </tr>

        <tr style={{ height: "1.6pt" }}></tr>

        <tr style={{ height: "3.6pt", border: "0px" }}>
          <td
            className="sbf87b402"
            colSpan="78"
            style={{
              height: "3.6pt",
              width: "200pt",
              border: "0px",
              color: "black",
            }}
          >
            Tax Invoice فاتورة ضريبية
          </td>
        </tr>

        {/* SHOP LOCATION NUMBER & WEBSITE */}

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231"
            colSpan="16"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            TRN:
          </td>
          <td
            className="s0ed61093"
            colSpan="16"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            100039473200003
          </td>
          <td
            className="s9d52418f"
            colSpan="30"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            الرقم الضريبي
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231"
            colSpan="32"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
             </td>
          <td
            className="s0ed61093"
            colSpan=""
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          ></td>
          <td
            className="s9d52418f"
            colSpan="30"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
       </td>
        </tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231a"
            colSpan="32"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Ground Floor,
          </td>
          <td
            className="s0ed61093"
            colSpan=""
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          ></td>
          <td
            className="s9d52418f"
            colSpan="30"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          ></td>
        </tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231a"
            colSpan="32"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
           Ajman City Center
          </td>
          <td
            className="s0ed61093"
            colSpan=""
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          ></td>
          <td
            className="s9d52418f"
            colSpan="30"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          ></td>
        </tr>
        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231"
            colSpan="18"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            E-mail:
          </td>
          <td
            className="s0ed61093"
            colSpan="26"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            ajmancc@aljaber.ae
          </td>
          <td
            className="s9d52418f"
            colSpan="30"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            البريد الالكتروني
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231"
            colSpan="18"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Phone:
          </td>
          <td
            className="s0ed61093"
            colSpan="26"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            055-6002273{" "}
          </td>
          <td
            className="s9d52418f"
            colSpan="30"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            هاتف
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "5pt", border: "0px" }}>
          <td
            className="s229be3d5"
            colSpan="18"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            Invoice No:
          </td>
          <td
            className="sa68dfb25"
            colSpan="26"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            /رقم الفاتور
          </td>
          <td
            className="s6d4f69ab"
            colSpan="30"
            style={{ height: "5pt", width: "83pt", border: "0px" }}
          >
            {location.state.invb}
          </td>
        </tr>

        <tr style={{ height: "5pt", border: "0px" }}>
          <td
            className="s229be3d5"
            colSpan="18"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            Date&Time:
          </td>
          <td
            className="sa68dfb25"
            colSpan="26"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            التاريخ/الوقت
          </td>
          <td
            className="s6d4f69ab"
            colSpan="30"
            style={{ height: "5pt", width: "83pt", border: "0px" }}
          >
            {location.state.ActualDate}
          </td>
        </tr>

        <tr style={{ height: "5pt", border: "0px" }}>
          <td
            className="s229be3d5"
            colSpan="18"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            Salesman:
          </td>
          <td
            className="sa68dfb25"
            colSpan="26"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            /البائع
          </td>
          <td
            className="s6d4f69ab"
            colSpan="30"
            style={{ height: "5pt", width: "83pt", border: "0px" }}
          >
            {location.state.Sales_Person_id} {location.state.Sales_Person_fn}{" "}
            {location.state.Sales_Person_ln}
          </td>
        </tr>

        <tr style={{ height: "5pt", border: "0px" }}>
          <td
            className="s229be3d5"
            colSpan="18"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            Customer Name:
          </td>
          <td
            className="sa68dfb25"
            colSpan="26"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            /العميل
          </td>
          <td
            className="s6d4f69ab"
            colSpan="30"
            style={{ height: "5pt", width: "83pt", border: "0px" }}
          >
            {location.state.CusFirstName} {location.state.cuslname}
          </td>
        </tr>

        <tr style={{ height: "5pt", border: "0px" }}>
          <td
            className="s229be3d5"
            colSpan="18"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            Customer ID:
          </td>
          <td
            className="sa68dfb25"
            colSpan="26"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            /رقم العميل
          </td>
          <td
            className="s6d4f69ab"
            colSpan="30"
            style={{ height: "5pt", width: "83pt", border: "0px" }}
          >
            {location.state.Cus_Idp}
          </td>
        </tr>

        <tr style={{ height: "5pt", border: "0px" }}>
          <td
            className="s229be3d5"
            colSpan="18"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            Phone:
          </td>
          <td
            className="sa68dfb25"
            colSpan="26"
            style={{ height: "5pt", width: "2000pt", border: "0px" }}
          >
            /هاتف
          </td>
          <td
            className="s6d4f69ab"
            colSpan="30"
            style={{ height: "5pt", width: "83pt", border: "0px" }}
          >
            {location.state.PhoneNumber}
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "2.6pt", borderTop: "1px solid black" }}></tr>

        <tr style={{ height: "5.3pt", border: "0px" }}>
          <td
            className="da"
            colSpan="78"
            style={{ height: "5.3pt", width: "68.7pt", border: "0px" }}
          >
            Direct Sale: /الصنف
          </td>
        </tr>

        <tr style={{ height: "2.6pt", borderTop: "1px dashed black" }}></tr>

        <tr style={{ height: "5.3pt", border: "0px" }}>
          <td
            className="da"
            colSpan="78"
            style={{ height: "5.3pt", width: "68.7pt", border: "0px" }}
          >
            Description/لا يوجد
          </td>
        </tr>

        <tr style={{ height: "4.6pt", borderTop: "1px dashed black" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f0423aaa1"
            colSpan="11"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            QTY
          </td>
          <td
            className="s9d52418f"
            colSpan="23"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Price
          </td>
          <td
            className="s9d52418f"
            colSpan="24"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            Tax
          </td>
          <td
            className="s9d52418f"
            colSpan="20"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            Total
          </td>
        </tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f0423aaa1"
            colSpan="11"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            الكمية
          </td>
          <td
            className="s9d52418f"
            colSpan="23"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            السعر
          </td>
          <td
            className="s9d52418f"
            colSpan="24"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            الضريبة
          </td>
          <td
            className="s9d52418f"
            colSpan="20"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            الإجمالي
          </td>
        </tr>

        <tr style={{ height: "4.6pt", borderTop: "1px dashed black" }}></tr>

        {/* MAP YAHAN LAGEGA FINAL FINAL */}

        {items ? (
          Object.keys(items).map((index, j) => (
            <>
              <tr style={{ height: "9.3pt", border: "0px" }}>
                <td
                  className="sa9929a0f"
                  colSpan="78"
                  style={{ height: "9.3pt", width: "68.7pt", border: "0px" }}
                >
                  {items[index].description}
                </td>
              </tr>

              {/* 
<tr style={{height:"9.3pt",border:"0px"}}>
   <td className="s844e672c" colSpan="78" style={{height:"9.3pt",width:"68.7pt",border:"0px"}}>300ML BIOTRUE EN</td>
   
</tr> */}

              <tr style={{ height: "9.3pt", border: "0px" }}>
                <td
                  className="s72bf31c2a"
                  colSpan="11"
                  style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
                >
                  {items[index].quantity}
                </td>
                <td
                  className="s72bf31c2"
                  colSpan="23"
                  style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
                >
                  {Math.round(items[index].netAmount * 100) / 100}
                </td>
                <td
                  className="s72bf31c2"
                  colSpan="24"
                  style={{ height: "11.4pt", width: "83pt", border: "0px" }}
                >
                  {items[index].vatCode}%
                </td>
                <td
                  className="s72bf31c2"
                  colSpan="20"
                  style={{ height: "11.4pt", width: "83pt", border: "0px" }}
                >
                  {Math.round(items[index].Total * 100) / 100}
                </td>
              </tr>

              <tr style={{ height: "4 pt", borderTop: "0px" }}></tr>
            </>
          ))
        ) : (
          <Box></Box>
        )}

        <tr style={{ height: "4.6pt", borderTop: "1px dashed black" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sb2dbfe4eab"
            colSpan="24"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            SubTotal:
          </td>
          <td
            className="sb2dbfe4eabc"
            colSpan="22"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            الإجمالي
          </td>
          <td
            className="sb2dbfe4e"
            colSpan="32"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            {location.state.Netvalue}
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sb2dbfe4eab"
            colSpan="24"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Total Before VAT:
          </td>
          <td
            className="sb2dbfe4eabc"
            colSpan="22"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            المجموع بدون الضريبة
          </td>
          <td
            className="sb2dbfe4e"
            colSpan="32"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            AED{location.state.BillTotal}
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sb2dbfe4eab"
            colSpan="24"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Total Vat:
          </td>
          <td
            className="sb2dbfe4eabc"
            colSpan="22"
            style={{ height: "5.7pt", width: "2800pt", border: "0px" }}
          >
            مجموع الضريبة
          </td>
          <td
            className="sb2dbfe4e"
            colSpan="32"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            AED{location.state.Vattotal}
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231a"
            colSpan="24"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Paid Amount:
          </td>
          <td
            className="sa8f04231b"
            colSpan="22"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            المبلغ المدفوع
          </td>
          <td
            className="sa8f04231c"
            colSpan="32"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            AED{location.state.Netvalue}
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        {/*No of items*/}

        <tr style={{ height: "2.5pt" }}></tr>
        <tr style={{ height: "4.6pt", borderTop: "1px dashed black" }}></tr>

        {/* PAYMENT INFOR ************_*__**_**__*_**_*_*__* */}

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231"
            colSpan="78"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Payment Info / معلومات الدفع
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231"
            colSpan="24"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Tender Type
          </td>
          <td
            className="s0ed61093"
            colSpan="22"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            Card Number
          </td>
          <td
            className="s9d52418f"
            colSpan="32"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            Amount
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>
          <td
            className="sa8f04231"
            colSpan="24"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            وصف الخدمة
          </td>
          <td
            className="s0ed61093"
            colSpan="22"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            رقم البطاقة
          </td>
          <td
            className="s9d52418f"
            colSpan="32"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            المبلغ
          </td>
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "9.3pt", border: "0px" }}>




        {tt ? (
          Object.keys(tt).map((index, j) => (
            <>





<td
            className="sb2dbfe4eab"
            colSpan="24"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          >
            {tt[index]}
          </td>



            
             </>
          ))
        ) : (
          <Box></Box>
        )}







          <td
            className="sb2dbfe4ea"
            colSpan="22"
            style={{ height: "5.7pt", width: "2000pt", border: "0px" }}
          ></td>


























{ta ? (
          Object.keys(ta).map((index, j) => (
            <>
                   <td
            className="sb2dbfe4e"
            colSpan="32"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            AED{ta[index]}<br/>
          </td>
             </>
          ))
        ) : (
          <Box></Box>
        )}















{/* 
          <td
            className="sb2dbfe4e"
            colSpan="32"
            style={{ height: "11.4pt", width: "83pt", border: "0px" }}
          >
            AED{location.state.Tender_Amount}
          </td> */}
        </tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "2.5pt" }}></tr>

        <tr style={{ height: "4.6pt", borderTop: "1px dashed black" }}></tr>

        {/* PLANET LOGO & CODE */}

        <tr style={{ height: "38.6pt" }}>
          <td style={{ height: "38.6pt", width: "15pt", border: "0px" }}></td>
          <td style={{ height: "38.6pt", width: "15pt", border: "0px" }}></td>
          <td style={{ height: "38.6pt", width: "15pt", border: "0px" }}></td>
          <td
            className="s9eb57ab3"
            style={{ height: "38.6pt", width: "15pt", border: "0px" }}
          ></td>
          <td
            className="s9eb57ab3"
            style={{ height: "38.6pt", width: "15pt", border: "0px" }}
          ></td>
          <td
            className="sc4540588"
            colSpan="23"
            style={{
              height: "45.8pt",
              width: "150pt",
              border: "0px",
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <img
              src="../images/planetlog.png"
              style={{ height: "45.8pt", width: "150pt", border: "0px" }}
            ></img>
          </td>
          <td style={{ height: "38.6pt", width: "15pt", border: "0px" }}></td>
          <td
            className="s9eb57ab3p"
            colSpan="32"
            style={{
              height: "38.6pt",
              width: "15pt",
              border: "0px",
              fontWeight: "900",
              color: "black",
            }}
          >
            {location.state.RefundTag}
          </td>
        </tr>

        <tr style={{ height: "4.6pt" }}></tr>

        <tr style={{ height: "4.6pt" }}></tr>

        <tr style={{ height: "17.9pt" }}>
          <td
            className="s45085224"
            colSpan="78"
            style={{ height: "17.9pt", width: "194.7pt", border: "0px" }}
          >
            شكرا لزيارتكم. في انتظار زيارتكم مرة أخري
          </td>
        </tr>

        <tr style={{ height: "4.6pt" }}></tr>

        <tr style={{ height: "17.9pt" }}>
          <td
            className="s45085224"
            colSpan="78"
            style={{ height: "17.9pt", width: "194.7pt", border: "0px" }}
          >
            THANK YOU FOR VISITING US. PLEASE VISIT AGAIN
          </td>
        </tr>

        <tr style={{ height: "4.6pt" }}></tr>

        {/* WARNING ARABIC */}
        <tr style={{ height: "17.9pt" }}>
          <td
            className="sf4d5c7ac"
            colSpan="78"
            style={{ height: "17.9pt", width: "194.7pt", border: "0px" }}
          >
            سياسة تبديل البضاعة{" "}
          </td>
        </tr>

        <tr style={{ height: "4.6pt" }}></tr>

        <tr style={{ height: "67.3pt" }}>
          <td
            className="s3f638c96"
            colSpan="78"
            style={{ height: "67.3pt", width: "194.7pt", border: "0px" }}
          >
            يمكن للعملاء استبدال البضاعة المباعة فقط بشرط إعادتها سليمة وبحالة
            ممتازة في أغلفتها الأساسية ومع الفاتورة الأصلية وفي غضون ٧ أيام من
            تاريخ الشراء ولا يسمح بإسترداد المبالغ المدفوعة. الضمان يسري فقط على
            عيوب التصنيع او تغيرلون الاطار خلال فترة الضمان المتفق عليها. الضمان
            لا يشمل الخدوش أو الضرر الناجم عن حادث أو الاستخدام غير السليم أو
            التخزين الخاطئ أو الأضرار التي تسببها المنتجات الكيماوية أو اي
            تعديلات أو إصلاحات غير مصرح بها
          </td>
        </tr>

        <tr style={{ height: "4.6pt" }}></tr>

        <tr style={{ height: "17.9pt" }}>
          <td
            className="sf4d5c7ac"
            colSpan="78"
            style={{ height: "17.9pt", width: "194.7pt", border: "0px" }}
          >
            Exchange Policy
          </td>
        </tr>

        <tr style={{ height: "4.6pt" }}></tr>

        <tr style={{ height: "38.6pt" }}>
          <td
            className="s56d8bf6b"
            colSpan="78"
            style={{ height: "38.6pt", width: "194.7pt", border: "0px" }}
          >
            Customers can only exchange items where the item is intact, in
            excellent condition, in its original packaging and with the original
            invoice within 7 days from the date of purchase. no refunds are
            allowed.The warranty covers manufacture defect or lens coating or
            frame color peel off only.The warranty does not cover scratches or
            damage caused by accident, improper use, incorrect storage, damage
            caused by chemical products or Unauthorized repairs, etc.
          </td>
        </tr>

        <tr style={{ height: "4.6pt" }}></tr>

        <tr style={{ height: "17.9pt" }}>
          <td
            className="s45085224"
            colSpan="78"
            style={{ height: "17.9pt", width: "194.7pt", border: "0px" }}
          >
            www.aljaberoptical.com
          </td>
        </tr>

        <tr style={{ height: "4.6pt" }}></tr>

        {/* MAIN LOGO */}
        <tr style={{ height: "45.8pt" }}>
          <td
            className="sc4540588"
            colSpan="78"
            style={{
              height: "45.8pt",
              width: "150pt",
              border: "0px",
              paddingLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Barcode code={location.state.Cus_Idp} />
          </td>
        </tr>

        {/* MAIN LOGO */}
        <tr style={{ height: "45.8pt" }}>
          <td
            className="sc4540588"
            colSpan="78"
            style={{
              height: "45.8pt",
              width: "150pt",
              border: "0px",
              paddingLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Barcodec code={location.state.invb} />
          </td>
        </tr>
      </table>
      {!isPrinting && (
        <Box
          as="button"
          type="submit"
          value="Submit"
          bg="#3eb55f"
          height="401px"
          mt="101px solid blue "
          width="401px"
          borderRadius="15px"
          // border="1px solid #414141"
          boxShadow="rgba(0, 0, 0, 0.24) 1px solid blue  3px 8px"
          color="white"
          _hover={{
            bg: "#414141",
            color: "white",
            boxShadow: "rgba(0, 0, 0, 0.77) 1px solid blue  8px 12px",
            border: "1px solid blue  solid #414141",
          }}
          onClick={printItems}
          position="absolute"
          top="15px"
          left="57%"
        >
          Print
        </Box>
      )}
    </>
  );
};

export default GeneratedReciept;
