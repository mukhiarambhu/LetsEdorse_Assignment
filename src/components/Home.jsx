import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./home.css";

function Home() {
  const [inputData, setInputData] = useState({
    business_stage: "",
    age_of_establishment: "",
    primary_product_service_offered: "",
    offered_to: "",
    secondary_product_service_offered: "",
    processed_products: "",
    relevant_experience: "",
    skill_training: "",
    usp: [],
    establishment_type: "",
    business_area: "",
    business_locality: "",
    infra_ownership: "",
    establishment_area: "",
    reason_for_location: [],
    market_research: "",
    primary_market: "",
    customers: "",
    seasonality: "",
    competition: "",
    suppliers: "",
    marketing_avenues: [],
    scaleup_potential: [],
  });
  //global names
  const name = "Rambhu";
  const business_idea = "medical courier service";
  const city = "pune";

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  }

  //function to handle ups
  const [ups, setUps] = useState([]);

  function handleUps(e) {
    const { checked, name } = e.target;

    if (checked) {
      setUps([...ups, name]);
    } else {
      setUps(ups.filter((e) => e !== name));
    }
  }
  //function to handle location
  const [location, setLocation] = useState([]);

  function handleLocation(e) {
    const { checked, name } = e.target;
    if (checked) {
      setLocation([...location, name]);
    } else {
      setLocation(location.filter((el) => el !== name));
    }
  }

  //function to handle avenue
  const [avenue, setAvenue] = useState([]);

  function handleAvenue(e) {
    const { name, checked } = e.target;
    if (checked) {
      setAvenue([...avenue, name]);
    } else {
      setAvenue(avenue.filter((el) => el !== name));
    }
  }

  //function to handle scaleup
  const [scaleup, setScaleups] = useState([]);

  function handleScaleup(e) {
    const { name, checked } = e.target;
    console.log(name);
    if (checked) {
      setScaleups([...scaleup, name]);
    } else {
      setScaleups(scaleup.filter((el) => el !== name));
    }
  }
  return (
    <div className="mainHome_div">
      <div className="form">
        <div className="form_heading">
          <h2>Please,Fill Form Data</h2>
        </div>
        <form action="">
          {/* {Stage of business} */}
          <h3>Section:Introduction</h3>
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Stage of business">Stage of business: </label>
            </div>

            <select name="business_stage" onChange={handleChange}>
              <option value="">select</option>
              <option value="Start-up">Start-up</option>
              <option value="Scale-up">Scale-up</option>
            </select>
          </div>

          {/* {age_of_establishment} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Age of establishment (years) (Enter 0 if it is yet to start-up)">
                Age of establishment (years) (Enter 0 if it is yet to start-up):{" "}
              </label>
            </div>

            <input
              type="Number"
              name="age_of_establishment"
              min="0"
              max="100"
              placeholder="Enter age of Establishment"
              onChange={handleChange}
            />
          </div>
          {/* {primary_product_service_offered} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Primary Products/Services offfered">
                Primary Products/Services offfered:
              </label>
            </div>

            <input
              type="text"
              name="primary_product_service_offered"
              placeholder="Enter Primary Products/Services"
              onChange={handleChange}
            />
          </div>

          {/* {offered_to} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Offered to">Offered to: </label>
            </div>

            <select name="offered_to" onChange={handleChange}>
              <option value="">select</option>
              <option value="End customers">End customers</option>
              <option value="Wholesalers">Wholesalers</option>
              <option value="Distributors">Distributors</option>
              <option value="Retailers">Retailers</option>
            </select>
          </div>

          {/* {Secondary Products/Services offfered} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Secondary Products/Services offfered">
                Secondary Products/Services offfered:
              </label>
            </div>

            <input
              type="text"
              name="secondary_product_service_offered"
              placeholder="Enter Secondary Products/Service"
              onChange={handleChange}
            />
          </div>

          {/* {processed_products} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Processed products (Products you produce from the raw materials)">
                Processed products (Products you produce from the raw
                materials):
              </label>
            </div>

            <input
              type="text"
              name="processed_products"
              placeholder="Enter Processed Products"
              onChange={handleChange}
            />
          </div>

          {/* {relevant_experience} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Years of relevant experience in this field">
                Years of relevant experience in this field
              </label>
            </div>

            <input
              type="Number"
              name="relevant_experience"
              placeholder="Enter year of Experience "
              onChange={handleChange}
            />
          </div>

          {/* {skill_training} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              {" "}
              <label htmlFor="Skill training">Skill training: </label>
            </div>

            <select name="skill_training" onChange={handleChange}>
              <option value="">select</option>
              <option value="No formal skill training">
                No formal skill training
              </option>
              <option value="Has formal training and certificate">
                Has formal training and certificate
              </option>
              <option value="Distributors">Distributors</option>
              <option value="Retailers">Retailers</option>
            </select>
          </div>
          {/* {multiform data} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Unique Selling Proposition">
                Unique Selling Proposition:
              </label>
            </div>

            <div className="form_checkbox_div">
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="experience entrepreneur's "
                />
                <p>experience entrepreneur's</p>
              </div>
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="innovative product/service"
                />
                <p> innovative product/service</p>
              </div>
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="high profit margin"
                />
                <p> high profit margin</p>
              </div>
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="high growth potential"
                />
                <p> high growth potential</p>
              </div>
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="superior customer support"
                />
                <p> superior customer support</p>
              </div>
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="quality and affordable"
                />
                <p> quality and affordable</p>
              </div>
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="abundant supply"
                />
                <p>abundant supply </p>
              </div>
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="large customer base"
                />
                <p>large customer base </p>
              </div>
              <div>
                <input
                  id="usp"
                  type="checkbox"
                  onChange={(e) => handleUps(e)}
                  name="robust value-chain"
                />
                <p>robust value-chain </p>
              </div>
            </div>
          </div>
          <h3>Section:Location</h3>
          {/* {establishment_type} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Establishment type">Establishment type: </label>
            </div>

            <select name="establishment_type" onChange={handleChange}>
              <option>select</option>
              <option value="Factory">Factory</option>
              <option value="Mill">Mill</option>
              <option value="Stall">Stall</option>
              <option value="Workshop">Workshop</option>
              <option value="Botique">Botique</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Centre">Centre</option>
              <option value="Store">Store</option>
              <option value="Farm">Farm</option>
              <option value="Plant">Plant</option>
              <option value="Processing Unit">Processing Unit</option>
              <option value="Shop">Shop</option>
              <option value="Vending cart">Vending cart</option>
              <option value="Manufacturing Unit">Manufacturing Unit</option>
            </select>
          </div>

          {/* {business_area} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              {" "}
              <label htmlFor="Name of the area">Name of the area:</label>
            </div>

            <input
              type="text"
              name="business_area"
              placeholder="Enter Name of business Area"
              onChange={handleChange}
            />
          </div>

          {/* {business_locality} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              {" "}
              <label htmlFor="Locality of business">
                Locality of business:{" "}
              </label>
            </div>

            <select name="business_locality" onChange={handleChange}>
              <option>select</option>
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
              <option value="Semi-urban">Semi-urban</option>
              <option value="Slum">Slum</option>
            </select>
          </div>

          {/* {infra_ownership} */}

          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Ownership of infrastructure">
                Ownership of infrastructure:{" "}
              </label>
            </div>

            <select name="infra_ownership" onChange={handleChange}>
              <option>select</option>
              <option value="Rented">Rented</option>
              <option value="Leased">Leased</option>
              <option value="Self-owned">Self-owned</option>
              <option value="Slum">Slum</option>
            </select>
          </div>

          {/* {establishment_area} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Establishment area (in square feet) (Enter 0 if the establishment area is irrelevant)">
                Establishment area (in square feet) (Enter 0 if the
                establishment area is irrelevant):
              </label>
            </div>

            <input
              type="number"
              name="establishment_area"
              placeholder="Enter Establishment area "
              onChange={handleChange}
            />
          </div>
          {/* {reason for location} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Reason for selecting this location">
                Reason for selecting this location:
              </label>
            </div>

            <div className="form_checkbox_div">
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="Near to market"
                />
                <p>Near to market</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="Gootfootball"
                />
                <p> Gootfootball</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="Raw material available"
                />
                <p> Raw material available</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="target customer nearby"
                />
                <p> target customer nearby</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="less competition"
                />
                <p> less competition</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="access to permit"
                />
                <p> access to permit</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="Nearness to supplier"
                />
                <p>Nearness to supplier </p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="Affordability"
                />
                <p>Affordability </p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  onChange={(e) => handleLocation(e)}
                  name="No rental overhead"
                />
                <p>No rental overhead </p>
              </div>
            </div>
          </div>
          <h3>Section:Market Research</h3>
          {/* {market_research} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Market research">Market research: </label>
            </div>

            <select name="market_research" onChange={handleChange}>
              <option value="">select</option>
              <option value="Not conducted">Not conducted</option>
              <option value="Market research has been conducted">
                Market research has been conducted
              </option>
            </select>
          </div>
          {/* {primary_market} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Primary market">Primary market: </label>
            </div>

            <select name="primary_market" onChange={handleChange}>
              <option>select</option>
              <option value="Local">Local</option>
              <option value="Regional">Regional</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
          {/* {customers} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Customers">Customers:</label>
            </div>

            <input
              type="text"
              name="customers"
              placeholder="Enter Customer name"
              onChange={handleChange}
            />
          </div>
          {/* {season of high sale} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Seasons of high sales">
                Seasons of high sales:{" "}
              </label>
            </div>

            <select name="seasonality" onChange={handleChange}>
              <option value="">select</option>
              <option value="Consisitent sales across all seasons">
                Consisitent sales across all seasons
              </option>
              <option value="Higher sales in festive seasons">
                Higher sales in festive seasons
              </option>
              <option value="High sales in cropping/cultivation season">
                High sales in cropping/cultivation season
              </option>
              <option value="High sales in peak seasons">
                High sales in peak seasons
              </option>
            </select>
          </div>
          {/* {competition} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Competition">Competition: </label>
            </div>

            <select name="competition" onChange={handleChange}>
              <option>select</option>
              <option value="No similar goods/service provider in this locality">
                No similar goods/service provider in this locality
              </option>
              <option value="Only a fewer goods/service providers in this locality">
                Only a fewer goods/service providers in this locality
              </option>
              <option value="Many similar goods/service providers in this locality">
                Many similar goods/service providers in this locality
              </option>
              <option value="High sales in peak seasons">
                High sales in peak seasons
              </option>
            </select>
          </div>
          {/* {suppliers} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="List of Suppliers">List of Suppliers:</label>
            </div>

            <input
              type="text"
              name="suppliers"
              placeholder="Enter Supplers name"
              onChange={handleChange}
            />
          </div>
          {/* {marketing avenue} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Marketing avenues">Marketing avenues:</label>
            </div>

            <div className="form_checkbox_div">
              <div>
                <input
                  type="checkbox"
                  id="marketing_avenues"
                  onChange={(e) => handleAvenue(e)}
                  name="Distribution of marketing material "
                />
                <p>Distribution of marketing material</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="marketing_avenues"
                  onChange={(e) => handleAvenue(e)}
                  name="storefront/business branding"
                />
                <p> storefront/business branding</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="marketing_avenues"
                  onChange={(e) => handleAvenue(e)}
                  name="seasonal discount and offer"
                />
                <p> seasonal discount and offer</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="marketing_avenues"
                  onChange={(e) => handleAvenue(e)}
                  name="Cross-promotion"
                />
                <p> Cross-promotion</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="marketing_avenues"
                  onChange={(e) => handleAvenue(e)}
                  name="Digital Marketing"
                />
                <p> Digital Marketing</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="marketing_avenues"
                  onChange={(e) => handleAvenue(e)}
                  name="Word of mouth"
                />
                <p> Word of mouth</p>
              </div>
            </div>
          </div>
          <h3>Section:Scaling Potential</h3>
          {/* {scaleup potential} */}
          <div className="form_inputdiv" style={{ marginBottom: "30px" }}>
            <div className="form_labeldiv">
              <label htmlFor="Avenues of scaling up in future">
                Avenues of scaling up in future:
              </label>
            </div>

            <div className="form_checkbox_div">
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  onChange={(e) => handleScaleup(e)}
                  name="increasing varity of product"
                />
                <p>increasing varity of product</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  onChange={(e) => handleScaleup(e)}
                  name="opening more outlets"
                />
                <p> opening more outlets</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  onChange={(e) => handleScaleup(e)}
                  name="growing scale of operation"
                />
                <p> growing scale of operation</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  onChange={(e) => handleScaleup(e)}
                  name="building value chain int"
                />
                <p> building value chain int</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  onChange={(e) => handleScaleup(e)}
                  name="allied revenue streams"
                />
                <p> allied revenue streams</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="para">
        <div className="form_heading">
          <h2>Check, have you filled it right ?</h2>
        </div>
        <article>
          <p>
            <span>
              {inputData.business_stage !== ""
                ? `${name} is looking to ${inputData.business_stage} their business of ${business_idea}.`
                : null}
            </span>
            <span>
              {inputData.age_of_establishment === 0
                ? null
                : inputData.age_of_establishment.length !== 0 &&
                  inputData.age_of_establishment > 0
                ? `This enterprise has been operational since ${inputData.age_of_establishment} years and has been serving its customers since then.`
                : null}
            </span>
            <span>
              {inputData.primary_product_service_offered.length !== 0
                ? `This establishment offers products/services like-${inputData.primary_product_service_offered} to ${inputData.offered_to}.`
                : null}
            </span>

            <span>
              {inputData.secondary_product_service_offered.length !== 0
                ? `In addition, the enterprise shall also be involved in- ${inputData.secondary_product_service_offered}.`
                : null}
            </span>
            <span>
              {inputData.processed_products.length === 0
                ? null
                : inputData.processed_products !== ""
                ? `Other products of the enterprise shall include- ${inputData.processed_products}.`
                : null}
            </span>
            <span>
              {inputData.relevant_experience === 0
                ? null
                : inputData.relevant_experience.length !== 0 &&
                  inputData.relevant_experience > 0
                ? `This enterprise has been operational since ${inputData.relevant_experience} years and has been serving its customers since then.`
                : null}
            </span>

            <span>
              {inputData.skill_training === "" ||
              inputData.skill_training === "No formal skill training"
                ? null
                : `The entrepreneur ${inputData.skill_training} in this field of work.`}
            </span>
            <span>
              {ups.length === 0
                ? null
                : ` The enterprise is uniquely positioned because of its -
              ${ups.join(",")}.`}
            </span>
          </p>
          {/* {second paragraph} */}
          <p style={{ marginTop: "10px" }}>
            <span>
              {inputData.establishment_type === ""
                ? null
                : `The ${inputData.establishment_type} is located in ${inputData.business_locality} ${inputData.business_area} of ${city} in a ${inputData.infra_ownership} property.`}
            </span>
            <span>
              {inputData.establishment_area === 0
                ? null
                : inputData.establishment_area.length !== 0 &&
                  inputData.establishment_area > 0
                ? `The size of the establishment is ${inputData.establishment_area} sq.ft.`
                : null}
            </span>
            <span>
              {location.length === 0
                ? null
                : `This locality is selected because of ${location.join(",")}`}
            </span>
          </p>
          {/* {third paragraph} */}
          <p tyle={{ marginTop: "10px" }}>
            <span>
              {inputData.market_research === "" ||
              inputData.market_research === "Not conducted"
                ? null
                : `The entrepreneur ${inputData.market_research} in this field of work.`}
            </span>
            <span>
              {inputData.primary_market === ""
                ? null
                : `The entrepreneur ${inputData.primary_market} in this field of work.`}
            </span>
            <span>
              {inputData.customers.length !== 0
                ? `Our customers shall include- ${inputData.customers}`
                : null}
            </span>
            <span>
              {inputData.seasonality === ""
                ? null
                : `The nature of the business is such that we expect ${inputData.seasonality}.`}
            </span>
            <span>
              {inputData.competition === ""
                ? null
                : `Regarding competition, there are ${inputData.competition}.`}
            </span>
            <span>
              {inputData.suppliers.length !== 0
                ? `The enterprise shall procure goods/raw materials from ${inputData.suppliers}.`
                : null}
            </span>
            <span>
              {avenue.length === 0
                ? null
                : `Our marketing avenues to reach the targeted customers shall include- ${avenue.join(
                    ","
                  )}`}
            </span>
          </p>
          {/* {fourthpara} */}
          <p style={{ marginTop: "10px" }}>
            <span>
              {scaleup.length === 0
                ? null
                : `The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- ${scaleup.join(
                    ","
                  )}.`}
            </span>
          </p>
        </article>
      </div>
    </div>
  );
}

export default Home;
