import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Box, Img, Input, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import axios from "../Helpers/axios";
import { Link, useNavigate } from "react-router-dom";

import {
  issuetaxrefundtag,
  terminal,
  types,
  o_code,
  o_name,
  payment_method_code,
  document_type,
} from "../Helpers/info";

const Ptrp = () => {
  // STATE FOR PLANET API DATA +++++++++++++++++++++++++++++++++++++++++++++++++
  const navigate = useNavigate();
  // state for first api call
  // let pay_amount = [];
  // let ptkt = [];
  let card_description = [];
  const [invnb, setinvnb] = useState("");
  const [TransactionId, setTransactionId] = useState("");
  const [ActualDate, setActualDate] = useState("");
  const [SubTotal, setSubTotal] = useState("");

  const [clickcount, setclickcount] = useState(0);

  const [Tax, setTax] = useState("");
  const [Total, setTotal] = useState("");
  const [TransactionKey, setTransactionKey] = useState("");
  const [UserKey, setUserKey] = useState("");
  const [invitemsdt, setinvitemsdt] = useState({});

  const [Billtotalr, setBilltotalr] = useState("");
  const [customerkeyr, setcustomerkeyr] = useState("");
  const [Cusidr, setCusidr] = useState("");
  const [netvaluer, setnetvaluer] = useState("");
  const [Noofitems, setNoofitems] = useState("");

  const [TenderTyper, setTenderTyper] = useState({});
  const [TenderCardr, setTenderCardr] = useState("");
  const [TenderAmountr, setTenderAmountr] = useState({});
  const [Tenderptk, setTenderptk] = useState({});

  const [Discountr, setDiscountr] = useState("");
  const [Qunatityr, setQunatityr] = useState("");
  const [Refundtagr, setRefundtag] = useState("");

  const [salerid, setsalerid] = useState("");
  const [salerfn, setsalerfn] = useState("");
  const [salerln, setsalerln] = useState("");

  // state for  call
  const [shopperFN, setshopperFN] = useState("");
  const [shopperLN, setshopperLN] = useState("");
  const [shopperNAT, setshopperNAT] = useState("");
  const [shopperCOR, setshopperCOR] = useState("");
  const [shopperPHNN, setshopperPHNN] = useState("");
  const [shopperBD, setshopperBD] = useState("");

  // Documents states

  const [shopperidentityDT, setshopperidentityDT] = useState("");
  const [shopperidentityIB, setshopperidentityIB] = useState("");
  const [shopperidentityDNUM, setshopperidentityDNUM] = useState("");
  const [passportscan, setpassportscan] = useState("");

  const [loading, setloading] = useState("");

  // STATE FOR PLANET API DATA +++++++++++++++++++++++++++++++++++++++++++++++++

  const alpha3ToAlpha2 = {
    AFG: "AF",
    ALA: "AX",
    ALB: "AL",
    DZA: "DZ",
    ASM: "AS",
    AND: "AD",
    AGO: "AO",
    AIA: "AI",
    ATA: "AQ",
    ATG: "AG",
    ARG: "AR",
    ARM: "AM",
    ABW: "AW",
    AUS: "AU",
    AUT: "AT",
    AZE: "AZ",
    BHS: "BS",
    BHR: "BH",
    BGD: "BD",
    BRB: "BB",
    BLR: "BY",
    BEL: "BE",
    BLZ: "BZ",
    BEN: "BJ",
    BMU: "BM",
    BTN: "BT",
    BOL: "BO",
    BES: "BQ",
    BIH: "BA",
    BWA: "BW",
    BVT: "BV",
    BRA: "BR",
    IOT: "IO",
    BRN: "BN",
    BGR: "BG",
    BFA: "BF",
    BDI: "BI",
    CPV: "CV",
    KHM: "KH",
    CMR: "CM",
    CAN: "CA",
    CYM: "KY",
    CAF: "CF",
    TCD: "TD",
    CHL: "CL",
    CHN: "CN",
    CXR: "CX",
    CCK: "CC",
    COL: "CO",
    COM: "KM",
    COG: "CG",
    COD: "CD",
    COK: "CK",
    CRI: "CR",
    CIV: "CI",
    HRV: "HR",
    CUB: "CU",
    CUW: "CW",
    CYP: "CY",
    CZE: "CZ",
    DNK: "DK",
    DJI: "DJ",
    DMA: "DM",
    DOM: "DO",
    ECU: "EC",
    EGY: "EG",
    SLV: "SV",
    GNQ: "GQ",
    ERI: "ER",
    EST: "EE",
    ETH: "ET",
    FLK: "FK",
    FRO: "FO",
    FJI: "FJ",
    FIN: "FI",
    FRA: "FR",
    GUF: "GF",
    PYF: "PF",
    ATF: "TF",
    GAB: "GA",
    GMB: "GM",
    GEO: "GE",
    DEU: "DE",
    GHA: "GH",
    GIB: "GI",
    GRC: "GR",
    GRL: "GL",
    GRD: "GD",
    GLP: "GP",
    GUM: "GU",
    GTM: "GT",
    GGY: "GG",
    GIN: "GN",
    GNB: "GW",
    GUY: "GY",
    HTI: "HT",
    HMD: "HM",
    VAT: "VA",
    HND: "HN",
    HKG: "HK",
    HUN: "HU",
    ISL: "IS",
    IND: "IN",
    IDN: "ID",
    IRN: "IR",
    IRQ: "IQ",
    IRL: "IE",
    IMN: "IM",
    ISR: "IL",
    ITA: "IT",
    JAM: "JM",
    JPN: "JP",
    JEY: "JE",
    JOR: "JO",
    KAZ: "KZ",
    KEN: "KE",
    KIR: "KI",
    PRK: "KP",
    KOR: "KR",
    KWT: "KW",
    KGZ: "KG",
    LAO: "LA",
    LVA: "LV",
    LBN: "LB",
    LSO: "LS",
    LBR: "LR",
    LBY: "LY",
    LIE: "LI",
    LTU: "LT",
    LUX: "LU",
    MAC: "MO",
    MKD: "MK",
    MDG: "MG",
    MWI: "MW",
    MYS: "MY",
    MDV: "MV",
    MLI: "ML",
    MLT: "MT",
    MHL: "MH",
    MTQ: "MQ",
    MRT: "MR",
    MUS: "MU",
    MYT: "YT",
    MEX: "MX",
    FSM: "FM",
    MDA: "MD",
    MCO: "MC",
    MNG: "MN",
    MNE: "ME",
    MSR: "MS",
    MAR: "MA",
    MOZ: "MZ",
    MMR: "MM",
    NAM: "NA",
    NRU: "NR",
    NPL: "NP",
    NLD: "NL",
    NCL: "NC",
    NZL: "NZ",
    NIC: "NI",
    NER: "NE",
    NGA: "NG",
    NIU: "NU",
    NFK: "NF",
    MNP: "MK",
    NOR: "NO",
    OMN: "OM",
    PAK: "PK",
    PLW: "PW",
    PSE: "PS",
    PAN: "PA",
    PNG: "PG",
    PRY: "PY",
    PER: "PE",
    PHL: "PH",
    PCN: "PN",
    POL: "PL",
    PRT: "PT",
    PRI: "PR",
    QAT: "QA",
    REU: "RE",
    BLM: "BL",
    SHN: "SH",
    KNA: "KN",
    LCA: "LC",
    MAF: "MF",
    SPM: "PM",
    VCT: "VC",
    WSM: "WS",
    SMR: "SM",
    STP: "ST",
    SAU: "SA",
    SEN: "SN",
    SRB: "RS",
    SYC: "SC",
    SLE: "SL",
    SGP: "SG",
    SXM: "SX",
    SVK: "SK",
    SVN: "SI",
    SLB: "SB",
    SOM: "SO",
    ZAF: "ZA",
    SGS: "GS",
    SSD: "SS",
    ESP: "ES",
    LKA: "LK",
    SDN: "SD",
    SUR: "SR",
    SJM: "SJ",
    SWE: "SE",
    CHE: "CH",
    SYR: "SY",
    TWN: "TW",
    TJK: "TJ",
    TZA: "TZ",
    THA: "TH",
    TLS: "TL",
    TGO: "TG",
    TKL: "TK",
    TON: "TO",
    TTO: "TT",
    TUN: "TN",
    TUR: "TR",
    TKM: "TM",
    TCA: "TC",
    TUV: "TV",
    UGA: "UG",
    UKR: "UA",
    ARE: "AE",
    GBR: "GB",
    USA: "US",
    UMI: "UM",
    URY: "UY",
    UZB: "UZ",
    VUT: "VU",
    VEN: "VE",
    VNM: "VN",
    VGB: "VG",
    VIR: "VI",
    WLF: "WF",
    ESH: "EH",
    YEM: "YE",
    ZMB: "ZM",
    ZWE: "ZW",
    RUS: "RU",
  };

  function convertAlpha3ToAlpha2(alpha3) {
    return alpha3ToAlpha2[alpha3] || "Invalid Code";
  }

  // FUNCTION TO FETCH INVOICE DATA FROM SQL
  const invdtfet = async () => {
    setloading(true);

    if (clickcount === 4) {
      alert("Please wait we are preparing the data for you");
    } else {
      setclickcount(clickcount + 1);
    }

    const body = {
      invoice_number: invnb,
    };

    const res = await axios.post(`/api/token/fetchinvoice`, body);
    console.log("inside fetchinvoice");
    if (res.status === 200) {
      console.log(res.data.basicinfo[0]);
      let binfo = res.data.basicinfo[0];
      setnetvaluer(binfo.Total);
      setBilltotalr(binfo.TotalTaxableAmount);
      setNoofitems(binfo.LineItemCount);
      setTransactionId(binfo.TransactionId);

      const dateTimeString = binfo.ActualDate;

      const now = new Date();
      const year = now.getFullYear().toString().padStart(4, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      const systemDateTime = `${year}-${month}-${day}T${hour}:${minute}`;

      console.log("systemDateTime");

      console.log(systemDateTime);

      console.log("systemDateTime");

      setActualDate(systemDateTime);

      // setActualDate(binfo.ActualDate);
      setTransactionKey(binfo.TransactionKey);
      setcustomerkeyr(binfo.CustomerKey);
      setUserKey(binfo.UserKey);

      if (TransactionKey !== undefined && TransactionKey !== null) {
        const body = {
          Transaction_Key: TransactionKey,
        };
        const res = await axios.post(`/api/token/fetchinvoiceitem`, body);
        if (res.status === 200) {
          //  console.log(res.data);
          let items = res.data;
          setinvitemsdt(items);

          console.log("invitemsdt");
          console.log(invitemsdt.invitem);
          console.log("invitemsdt");

          //  Vattotal
          let Vattotal = invitemsdt.invitem.reduce((a, c) => {
            return a + c.vatAmount;
          }, 0);
          console.log("Vattotal: ", Vattotal);
          setTax(Vattotal);
          //  unitPrice
          let tnetAmount = invitemsdt.invitem.reduce((a, c) => {
            return a + c.netAmount;
          }, 0);
          console.log("tnetAmount: ", tnetAmount);
          setTotal(tnetAmount);
          //  grossAmount
          let tgrossAmount = invitemsdt.invitem.reduce((a, c) => {
            return a + c.grossAmount;
          }, 0);
          console.log("tgrossAmount: ", tgrossAmount);
          setSubTotal(tgrossAmount);

          setTimeout(function () {
            customeridfetch(customerkeyr);
          }, 1000);
        } else {
          console.log("second api not hit");
        }
      } else {
        alert("couldnt fetch transactionkey");
      }
    } else {
      console.log("First api not hit");
    }
  };

  const customeridfetch = async (customerkeyr) => {
    const body = {
      Customer_Key: customerkeyr,
    };

    const res = await axios.post(`/api/token/fetchcustomer`, body);
    setCusidr(res.data[0].Cus_Id);

    setTimeout(function () {
      salesperson();
    }, 1000);
  };

  const salesperson = async () => {
    const body = {
      UserKey: UserKey,
    };

    console.log("salesperson");
    const res = await axios.post(`/api/token/salesperson`, body);
    setsalerid(res.data.resultdetails[0].Id);
    setsalerfn(res.data.resultdetails[0].FirstName);
    setsalerln(res.data.resultdetails[0].LastName);

    setTimeout(function () {
      tenderdetails();
    }, 1000);
  };

  const tenderdetails = async () => {
    const body = {
      Transaction_Key: TransactionKey,
    };

    const res = await axios.post(`/api/token/tenderamount`, body);
    console.log(res.data.payinfo);
    let temparr = res.data.payinfo;
    // temparr.push(res.data.payinfo)

    let payment_amount = [];
    let ptkt = [];
    for (let i = 0; i < temparr.length; i++) {
      console.log(temparr.length);
      payment_amount.push(res.data.payinfo[i].Tend_Amount);
      ptkt.push(res.data.payinfo[i].Tend_ptk);
    }
    setTenderAmountr(payment_amount);
    setTenderptk(ptkt);

    setTimeout(function () {
      {
        Tenderptk
          ? Object.keys(Tenderptk).map((index, j) => (
              <>{tendercard(Tenderptk[index])}</>
            ))
          : alert("Please start the process again");
      }
    }, 1500);
  };

  const tendercard = async (ptkt) => {
    const body = {
      PaymentTypeKey: ptkt,
    };

    console.log("tendercard");
    const res = await axios.post(`/api/token/tendercard`, body);
    console.log(res);
    card_description.push(res.data.resultdetails[0].Description);
    setTenderTyper(card_description);
    setloading(false);
  };

  const close = async () => {
    document.getElementById("succ").style.display = "none";
    window.location.href = "/";
  };

  const print = async () => {
    navigate("/generatedreciept", {
      state: {
        invb: invnb,
        ActualDate: ActualDate,
        invitemsdt: invitemsdt,
        Vattotal: Math.round(Tax * 100) / 100,
        BillTotal: Math.round(Billtotalr * 100) / 100,
        Netvalue: Math.round(netvaluer * 100) / 100,
        Noofitems: Noofitems,
        CustLastName: shopperLN,
        CusFirstName: shopperFN,
        Discount: Discountr,
        Quantity: Qunatityr,
        RefundTag: Refundtagr,
        PhoneNumber: shopperPHNN,
        Cus_Idp: Cusidr,
        Tender_Type: TenderTyper,
        Tender_Card: TenderCardr,
        Tender_Amount: TenderAmountr,
        Sales_Person_id: salerid,
        Sales_Person_fn: salerfn,
        Sales_Person_ln: salerln,
      },
    });
  };

  const passscan = async () => {
    if (passportscan.length > 0) {
      console.log("Passport scan function");
      console.log(passportscan);
      const data = passportscan.split("\n");

      const documentType = data[0].substring(0, 1);
      if (documentType == "P") {
        setshopperidentityDT("passport");
      } else {
        alert("Please check document type again");
      }

      const name = data[0].substring(5, 30);

      console.log(name);

      const nameArray = name.split("<");
      const lastName = nameArray[0];
      const firstName = nameArray.slice(1).join(" ");
      // const firstline = data[0].split("<");
      // const firstname = firstline[3];
      setshopperFN(firstName);
      // const Lastname = firstline[4];
      setshopperLN(lastName);

      const countryCode = data[0].substring(2, 5);
      console.log(countryCode);
      const countryCodealpha2 = convertAlpha3ToAlpha2(countryCode);
      setshopperCOR(countryCodealpha2);

      const secondline = data[1];

      if (secondline.length == 0) {
        alert("Second line not read. Please ");
      } else {
        if (data[1].substring(7, 8) != "<" && data[1].substring(8, 9) != "<") {
          const passportNumber = data[1].substring(0, 9);
          setshopperidentityDNUM(passportNumber);
        } else if (
          data[1].substring(8, 9) === "<" &&
          data[1].substring(7, 8) != "<"
        ) {
          const passportNumber = data[1].substring(0, 8);
          setshopperidentityDNUM(passportNumber);
        } else {
          console.log(data[1].substring(7, 9));
          const passportNumber = data[1].substring(0, 7);
          setshopperidentityDNUM(passportNumber);
        }

        const nationality = data[1].substring(10, 13);
        const natalpha2 = convertAlpha3ToAlpha2(nationality);
        setshopperidentityIB(natalpha2);
        setshopperNAT(natalpha2);

        const dateOfBirth = data[1].substring(13, 19);
        var yy = dateOfBirth.substring(0, 2);
        var mm = dateOfBirth.substring(2, 4);
        var dd = dateOfBirth.substring(4, 6);
        var year =
          yy > 45
            ? "19" + yy + "-" + mm + "-" + dd
            : "20" + yy + "-" + mm + "-" + dd;
        setshopperBD(year);

        const sex = data[1].substring(20, 21);
        const expirationDate = data[1].substring(21, 27);
        const personalNumber = data[1].substring(28, 42);
        const checkDigit1 = data[1].substring(42, 43);
        const checkDigit2 = data[2].substring(0, 1);
      }
    } else {
      alert("Please scan the passport first");
    }
  };

  // FUNCTION TO SEND FORM DATA
  const submitall = async () => {
    if (
      shopperPHNN.length == 0 ||
      invitemsdt.invitem == 0 ||
      shopperFN.length == 0 ||
      shopperCOR.length == 0 ||
      shopperNAT.length == 0
    ) {
      alert("Please check the Phone Number , Invoice Items  & shopper details");

      console.log("shopperCOR");
      console.log(shopperCOR);
      console.log("shopperCOR");
    } else {
      const body = {
        issueTaxRefundTag: issuetaxrefundtag,
        date: ActualDate,
        receiptNumber: invnb,
        terminal: terminal,
        type: types,
        operator: {
          code: o_code,
          name: o_name,
        },
        order: {
          totalBeforeVAT: Total,
          vatIncl: Tax,
          total: SubTotal,
          items: invitemsdt.invitem,
          paymentMethods: [
            {
              code: payment_method_code,
              amount: SubTotal,
            },
          ],
        },
        shopper: {
          firstName: shopperFN,
          lastName: shopperLN,
          nationality: shopperNAT,
          countryOfResidence: shopperCOR,
          phoneNumber: shopperPHNN,
          birth: {
            date: shopperBD,
          },
          shopperIdentityDocument: {
            expirationDate: "",
            type: document_type,
            issuedBy: shopperidentityIB,
            number: shopperidentityDNUM,
          },
        },
      };

      const res = await axios.post(`/api/token/userformdata`, body);
      if (res.status === 200) {
        if (res.data.stcode === 200) {
          console.log(res.data);
          let responsemsg = res.data.response.message;
          let refamount = res.data.response.refundAmount;
          let Taxrefundtag = res.data.response.taxRefundTagNumber;
          setRefundtag(res.data.response.taxRefundTagNumber);
          document.getElementById("mainbox").style.filter = "blur(5px)";
          document.getElementById("succ").style.display = "block";
          document.getElementById("succmsg").innerHTML = responsemsg;
          document.getElementById("Taxtag").innerHTML = Taxrefundtag;
          document.getElementById("taxamount").innerHTML = refamount;
        }

        if (res.data.stcode === 500) {
          document.getElementById("decmsg").style.display = "block";
          document.getElementById("decmsgt").innerHTML =
            res.data.details.message;

          setTimeout(function () {
            bktohome();
          }, 10000);
        }
      } else {
        console.log("api not hit");
      }
    }
  };

  // Function to go back to home page
  const bktohome = () => {
    window.location.href = "/";
  };
  return (
    <Layout>
      <Helmet>
        <title>Planet Tax Refund</title>
        <meta name="title" content="Aljaber Planet" />
        <meta name="description" content="Aljaber Loyalty Programme" />
        <meta name="Keywords" content="Aljaber" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>

      <Box
        id="mainbox"
        style={{
          filter: "blur(0px)",
        }}
      >
        <Box style={{ width: "100%" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "22px",
              color: "#414141",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            NEW TRANSACTION
          </Text>
        </Box>

        <Box
          style={{
            border: "1px solid #414141",
            borderRadius: "50px",
            marginLeft: "15px",
            marginRight: "15px",
            display: "flex",
            flexDirection: "row",
            filter: "blur(0px)",
          }}
        >
          {/* cart information */}
          <Box
            style={{
              height: "700px",
              width: "65%",
              borderRight: "1px solid #414141",
            }}
          >
            <Box style={{ borderBottom: "1px solid #414141", height: "30px" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#414141",
                }}
              >
                Cart Information
              </Text>
            </Box>

            <Box
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderBottom: "1px solid #414141",
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: "10px",
                  color: "red",
                  position: "absolute",
                  marginTop: "75px",
                  marginLeft: "28%",
                }}
              >
                NOTE: IMPORT INVOICE BUTTON NEEDS TO BE CLICKED 4 TIMES.
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "Normal",
                  fontSize: "18px",
                  color: "#414141",
                }}
              >
                Enter Reciept Number:
              </Text>
              <input
                type="text"
                required
                // maxLength="14"
                autoFocus
                // minLength="14"
                placeholder="Enter / Scan Invoice Number"
                onChange={(e) => setinvnb(e.target.value)}
                value={invnb}
                style={{
                  width: "30%",
                  height: "40px",
                  borderRadius: "15px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  border: "1px solid #3eb55f",
                }}
              ></input>

              <Box
                as="button"
                type="submit"
                value="Submit"
                bg="white"
                height="40px"
                width="150px"
                borderRadius="15px"
                // border="1px solid #414141"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                color="#414141"
                _hover={{
                  bg: "#3eb55f",
                  color: "white",
                  boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px",
                  border: "0px solid #414141",
                }}
                onClick={invdtfet}
              >
                Import Invoice
              </Box>

              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "BOLD",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                CLICK COUNT:{" "}
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "BOLD",
                    fontSize: "22px",
                    color: "RED",
                  }}
                >
                  {clickcount}
                </Text>
              </Text>
            </Box>

            {loading ? (
              <Box
                style={{
                  height: "380px",
                  marginTop: "10px",
                  overflowY: "auto",
                }}
              >
                <Img
                  width="200px"
                  height="200px"
                  mt="23px"
                  ml="auto"
                  mr="auto"
                  src="../images/loading.gif"
                />
              </Box>
            ) : (
              <Box
                style={{
                  height: "380px",
                  marginTop: "10px",
                  overflowY: "auto",
                }}
              >
                {/* YAHAN MAP LAGNA HAI */}

                {invitemsdt.invitem ? (
                  Object.keys(invitemsdt.invitem).map((index, j) => (
                    <Box
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        marginTop: "25px",
                        marginBottom: "10px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "65px",
                        borderRadius: "10px",
                        width: "99%",
                        border: "1px solid #414141",
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "Left",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#414141",
                          width: "45%",
                          marginTop: "1.2%",
                          marginLeft: "1.2%",
                        }}
                      >
                        {invitemsdt.invitem[index].description}
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#414141",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          backgroundColor: "rgba(16, 20, 237, 0.5)",
                          borderRadius: "5px",
                          marginRight: "10px",
                          height: "60%",
                          marginTop: "1.2%",
                        }}
                      >
                        {invitemsdt.invitem[index].quantity}
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#414141",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          backgroundColor: "rgba(16, 237, 16, 0.5)",
                          borderRadius: "5px",
                          marginRight: "10px",
                          height: "60%",
                          marginTop: "1.2%",
                        }}
                      >
                        Eligible
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#414141",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          border: "1px solid #414141",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        VAT: {invitemsdt.invitem[index].vatAmount}
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#414141",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          border: "1px solid #414141",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        Unit Amount : {invitemsdt.invitem[index].unitPrice}
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#414141",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          border: "1px solid #414141",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        Net Amount : {invitemsdt.invitem[index].netAmount}
                      </Text>

                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#414141",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                          border: "1px solid #414141",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        Total : {invitemsdt.invitem[index].grossAmount}
                      </Text>
                    </Box>
                  ))
                ) : (
                  <>
                    <Text
                      color="green"
                      fontWeight="Bold"
                      m="85px"
                      fontSize="24px"
                    >
                      {" "}
                      Please scan or enter invoice number.
                    </Text>
                  </>
                )}
              </Box>
            )}

            {/* TOTAL OF RECIEPTS GO HERE  */}

            <Box
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderTop: "1px solid #414141",
                borderBottom: "1px solid #414141",
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "Normal",
                  fontSize: "18px",
                  color: "#414141",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                Vat Amount:{" "}
                <Text
                  style={{
                    marginLeft: "15px",
                    padding: "10px",
                    backgroundColor: "#3eb55f",
                    borderRadius: "15px",
                    color: "white",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  AED {Math.round(Tax * 100) / 100}{" "}
                </Text>
              </Text>

              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "Normal",
                  fontSize: "18px",
                  color: "#414141",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                Unit Total:{" "}
                <Text
                  style={{
                    marginLeft: "15px",
                    padding: "10px",
                    backgroundColor: "#3eb55f",
                    borderRadius: "15px",
                    color: "white",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  AED {Math.round(Total * 100) / 100}
                </Text>
              </Text>

              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "Normal",
                  fontSize: "18px",
                  color: "#414141",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                Net Total:{" "}
                <Text
                  style={{
                    marginLeft: "15px",
                    padding: "10px",
                    backgroundColor: "#3eb55f",
                    borderRadius: "15px",
                    color: "white",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  AED {Math.round(Total * 100) / 100}{" "}
                </Text>
              </Text>

              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "Normal",
                  fontSize: "18px",
                  color: "#414141",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                Invoice Total:{" "}
                <Text
                  style={{
                    marginLeft: "15px",
                    padding: "10px",
                    backgroundColor: "#3eb55f",
                    borderRadius: "15px",
                    color: "white",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  AED {Math.round(SubTotal * 100) / 100}
                </Text>
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              height="70px"
              paddingTop="10px"
              paddingLeft="120px"
              position="absolute"
              bottom="5px"
              width="50%"
            >
              <Box
                as="button"
                bg="white"
                height="45px"
                width="150px"
                borderRadius="15px"
                // border="1px solid #414141"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                marginRight="25%"
                marginLeft="25%"
                color="#414141"
                _hover={{
                  bg: "#3eb55f",
                  color: "white",
                  boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px",
                  border: "0px solid #414141",
                }}
                onClick={bktohome}
              >
                Cancel
              </Box>
              <Box
                as="button"
                bg="white"
                height="45px"
                width="150px"
                borderRadius="15px"
                // border="1px solid #414141"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                color="#414141"
                _hover={{
                  bg: "#3eb55f",
                  color: "white",
                  boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px",
                  border: "0px solid #414141",
                }}
                onClick={submitall}
              >
                Refund Tax
              </Box>
            </Box>
          </Box>

          {/* Customer Information */}
          <Box style={{ height: "700px", width: "35%" }}>
            {/* CODE FOR HEADING  */}

            <Box style={{ borderBottom: "1px solid #414141", height: "30px" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#414141",
                }}
              >
                Customer Information
              </Text>
            </Box>

            {/* CODE FOR SCAN FUNCTIONALITY */}

            <Box
              style={{
                border: "1px solid #414141",
                height: "24%",
                margin: "25px",
                borderRadius: "15px",
              }}
            >
              <Box width="100%" height="25px" borderBottom="1px solid #414141">
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#414141",
                  }}
                >
                  Passport Scan
                </Text>
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // marginTop: "15px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <textarea
                  style={{
                    width: "100%",
                    height: "70px",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  type="text"
                  id="scanp"
                  placeholder="Click me and scan passport"
                  required
                  onChange={(e) => setpassportscan(e.target.value)}
                  value={passportscan}
                />
              </Box>

              <Box
                as="button"
                bg="white"
                height="30px"
                width="120px"
                borderRadius="8px"
                fontSize="12px"
                marginLeft="40%"
                marginTop="5px"
                // border="1px solid #414141"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 2px 5px"
                color="#414141"
                _hover={{
                  bg: "#3eb55f",
                  color: "white",
                  boxShadow: "rgba(0, 0, 0, 0.77) 0px 3px 8px",
                  border: "0px solid #414141",
                }}
                onClick={passscan}
              >
                Submit Passport
              </Box>
            </Box>

            {/* CODE FOR TOURIST INFO */}

            <Box
              style={{
                border: "1px solid #414141",
                height: "42%",
                marginTop: "15px",
                marginBottom: "15px",
                marginRight: "25px",
                marginLeft: "25px",
                borderRadius: "15px",
              }}
            >
              <Box width="100%" height="25px" borderBottom="1px solid #414141">
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#414141",
                    paddingTop: "2px",
                  }}
                >
                  Tourist Info
                </Text>
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <Box color="#414141" ml="15px" mr="95px">
                  First Name:{" "}
                </Box>
                <input
                  style={{
                    width: "50%",
                    height: "25px",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  type="text"
                  required
                  maxLength="20"
                  onChange={(e) => setshopperFN(e.target.value)}
                  value={shopperFN}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <Box color="#414141" ml="15px" mr="95px">
                  Last Name:{" "}
                </Box>
                <input
                  style={{
                    width: "50%",
                    height: "25px",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  type="text"
                  required
                  maxLength="20"
                  onChange={(e) => setshopperLN(e.target.value)}
                  value={shopperLN}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <Box color="#414141" ml="15px" mr="60px">
                  Phone Number:{" "}
                </Box>
                <input
                  style={{
                    width: "50%",
                    height: "25px",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  type="text"
                  required
                  maxLength="20"
                  onChange={(e) => setshopperPHNN(e.target.value)}
                  value={shopperPHNN}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <Box color="#414141" ml="15px" mr="80px">
                  Date Of Birth:{" "}
                </Box>
                <input
                  style={{
                    width: "50%",
                    height: "25px",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  type="date"
                  required
                  maxLength="20"
                  onChange={(e) => setshopperBD(e.target.value)}
                  value={shopperBD}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <Box color="#414141" ml="16px" mr="98px">
                  Nationality:{" "}
                </Box>

                <select
                  style={{
                    width: "50%",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  name="Nationality"
                  id="NAT"
                  value={shopperNAT}
                  onChange={(e) => setshopperNAT(e.target.value)}
                >
                  <option>Choose a country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua & Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Caribbean Netherlands</option>
                  <option value="BA">Bosnia & Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo - Brazzaville</option>
                  <option value="CD">Congo - Kinshasa</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Côte d’Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czechia</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Islas Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard & McDonald Islands</option>
                  <option value="VA">Vatican City</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">North Korea</option>
                  <option value="KR">South Korea</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">North Macedonia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar (Burma)</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="AN">Curaçao</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestine</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn Islands</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Réunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">St. Barthélemy</option>
                  <option value="SH">St. Helena</option>
                  <option value="KN">St. Kitts & Nevis</option>
                  <option value="LC">St. Lucia</option>
                  <option value="MF">St. Martin</option>
                  <option value="PM">St. Pierre & Miquelon</option>
                  <option value="VC">St. Vincent & Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">São Tomé & Príncipe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="CS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia & South Sandwich Islands
                  </option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard & Jan Mayen</option>
                  <option value="SZ">Eswatini</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad & Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks & Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">U.S. Outlying Islands</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="VG">British Virgin Islands</option>
                  <option value="VI">U.S. Virgin Islands</option>
                  <option value="WF">Wallis & Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <Box color="#414141" ml="15px" mr="20px">
                  Country of Residence:{" "}
                </Box>

                <select
                  style={{
                    width: "50%",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  name="CountryofRes"
                  id="COR"
                  value={shopperCOR}
                  onChange={(e) => setshopperCOR(e.target.value)}
                >
                  <option>Choose a country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua & Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Caribbean Netherlands</option>
                  <option value="BA">Bosnia & Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo - Brazzaville</option>
                  <option value="CD">Congo - Kinshasa</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Côte d’Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czechia</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Islas Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard & McDonald Islands</option>
                  <option value="VA">Vatican City</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">North Korea</option>
                  <option value="KR">South Korea</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">North Macedonia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar (Burma)</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="AN">Curaçao</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestine</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn Islands</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Réunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">St. Barthélemy</option>
                  <option value="SH">St. Helena</option>
                  <option value="KN">St. Kitts & Nevis</option>
                  <option value="LC">St. Lucia</option>
                  <option value="MF">St. Martin</option>
                  <option value="PM">St. Pierre & Miquelon</option>
                  <option value="VC">St. Vincent & Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">São Tomé & Príncipe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="CS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia & South Sandwich Islands
                  </option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard & Jan Mayen</option>
                  <option value="SZ">Eswatini</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad & Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks & Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">U.S. Outlying Islands</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="VG">British Virgin Islands</option>
                  <option value="VI">U.S. Virgin Islands</option>
                  <option value="WF">Wallis & Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </Box>
            </Box>

            {/* CODE FOR DOCUMENT INFO */}

            <Box
              style={{
                border: "1px solid #414141",
                height: "18%",
                margin: "25px",
                borderRadius: "15px",
                marginTop: "15px",
              }}
            >
              <Box width="100%" height="25px" borderBottom="1px solid #414141">
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#414141",
                    paddingTop: "2px",
                  }}
                >
                  Tourist Document Info
                </Text>
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <Box color="#414141" ml="25px" mr="50px">
                  Doc Type:{" "}
                </Box>
                <input
                  style={{
                    width: "50%",
                    height: "25px",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  type="text"
                  required
                  maxLength="20"
                  onChange={(e) => setshopperidentityDT(e.target.value)}
                  //  onChange={(e) => setshopperidentityDT(e.target.value)}
                  value={shopperidentityDT}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <Box color="#414141" ml="25px" mr="25px">
                  Doc Number:{" "}
                </Box>
                <input
                  style={{
                    width: "50%",
                    height: "25px",
                    borderRadius: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "1px solid #3eb55f",
                  }}
                  type="text"
                  required
                  maxLength="20"
                  onChange={(e) => setshopperidentityDNUM(e.target.value)}
                  value={shopperidentityDNUM}
                />
              </Box>
            </Box>

            {/* CODE FOR ERROR MESSAGE  */}

            <Box
              id="decmsg"
              style={{
                display: "none",
                padding: "15px",
                background: "rgba(255,255,255,1)",
                width: "395px",
                border: "5px solid red",
                position: "absolute",
                top: "4%",
                left: "78%",
              }}
            >
              <Text
                id="decmsgt"
                style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}
              >
                Record Not Submitted Successfully. Please resubmit
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CODE FOR SUCCESS MESSAGE  */}

      <Box
        id="succ"
        style={{
          zIndex: "9999",
          display: "none",
          borderRadius: "25px",
          padding: "25px",
          background: "#3eb55f",
          width: "550px",
          height: "400px",
          border: "10px solid hsla(0,0%,100%,.5)",
          position: "fixed",
          top: "30%",
          left: "38%",
          boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px",
        }}
      >
        <Text
          id="succmsg"
          style={{
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        ></Text>
        <Text
          style={{
            color: "#414141",
            fontSize: "18px",
            fontWeight: "normal",
            marginTop: "30px",
          }}
        >
          Please copy the code below:{" "}
        </Text>

        <Text
          id="Taxtag"
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10px",
          }}
        ></Text>
        <Text
          style={{
            color: "#414141",
            fontSize: "18px",
            fontWeight: "normal",
            marginTop: "30px",
          }}
        >
          {" "}
          Amount Tax Refunded in AED:{" "}
        </Text>

        <Text
          id="taxamount"
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10px",
          }}
        ></Text>
        <Box
          as="button"
          type="submit"
          value="Submit"
          bg="white"
          height="40px"
          width="150px"
          borderRadius="15px"
          // border="1px solid #414141"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          color="#414141"
          _hover={{
            bg: "#414141",
            color: "white",
            boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px",
            border: "0px solid #414141",
          }}
          onClick={close}
          position="absolute"
          bottom="15px"
          left="13%"
        >
          Close
        </Box>

        <Box
          as="button"
          type="submit"
          value="Submit"
          bg="white"
          height="40px"
          width="150px"
          borderRadius="15px"
          // border="1px solid #414141"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          color="#414141"
          _hover={{
            bg: "#414141",
            color: "white",
            boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px",
            border: "0px solid #414141",
          }}
          onClick={print}
          position="absolute"
          bottom="15px"
          left="57%"
        >
          Generate Receipt
        </Box>
      </Box>
    </Layout>
  );
};

export default Ptrp;
