import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="form">
        <form action="">
          {/* {Stage of business} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Stage of business">Stage of business: </label>
            </div>

            <select name="business_stage">
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
            />
          </div>
          {/* {primary_product_service_offered} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              {" "}
              <label htmlFor="Primary Products/Services offfered">
                Primary Products/Services offfered:
              </label>
            </div>

            <input type="text" name="primary_product_service_offered" />
          </div>

          {/* {offered_to} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Offered to">Offered to: </label>
            </div>

            <select name="offered_to">
              <option value="End customers">End customers</option>
              <option value="Wholesalers">Wholesalers</option>
              <option value="Distributors">Distributors</option>
              <option value="Retailers">Retailers</option>
            </select>
          </div>

          {/* {offered_to} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Secondary Products/Services offfered">
                Secondary Products/Services offfered:
              </label>
            </div>

            <input type="text" name="secondary_product_service_offered" />
          </div>

          {/* {processed_products} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Processed products (Products you produce from the raw materials)">
                Processed products (Products you produce from the raw
                materials):
              </label>
            </div>

            <input type="text" name="processed_products" />
          </div>

          {/* {relevant_experience} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Years of relevant experience in this field">
                Years of relevant experience in this field
              </label>
            </div>

            <input type="Number" name="relevant_experience" />
          </div>

          {/* {skill_training} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              {" "}
              <label htmlFor="Skill training">Skill training: </label>
            </div>

            <select name="skill_training">
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
                <input type="checkbox" name="experience entrepreneur's " />
                <p>experience entrepreneur's</p>
              </div>
              <div>
                <input type="checkbox" name="innovative product/service" />
                <p> innovative product/service</p>
              </div>
              <div>
                <input type="checkbox" name="high profit margin" />
                <p> high profit margin</p>
              </div>
              <div>
                <input type="checkbox" name="high growth potential" />
                <p> high growth potential</p>
              </div>
              <div>
                <input type="checkbox" name="superior customer support" />
                <p> superior customer support</p>
              </div>
              <div>
                <input type="checkbox" name="quality and affordable" />
                <p> quality and affordable</p>
              </div>
              <div>
                <input type="checkbox" name="abundant supply" />
                <p>abundant supply </p>
              </div>
              <div>
                <input type="checkbox" name="large customer base" />
                <p>large customer base </p>
              </div>
              <div>
                <input type="checkbox" name="robust value-chain" />
                <p>robust value-chain </p>
              </div>
            </div>
          </div>

          {/* {establishment_type} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Establishment type">Establishment type: </label>
            </div>

            <select name="establishment_type">
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

            <input type="text" name="business_area" />
          </div>

          {/* {business_locality} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              {" "}
              <label htmlFor="Locality of business">
                Locality of business:{" "}
              </label>
            </div>

            <select name="business_locality">
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

            <select name="infra_ownership">
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

            <input type="number" name="establishment_area" />
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
                  name="Near to market"
                />
                <p>Near to market</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  name="Gootfootball"
                />
                <p> Gootfootball</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  name="Raw material available"
                />
                <p> Raw material available</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  name="target customer nearby"
                />
                <p> target customer nearby</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  name="less competition"
                />
                <p> less competition</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  name="access to permit"
                />
                <p> access to permit</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  name="Nearness to supplier"
                />
                <p>Nearness to supplier </p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  name="Affordability"
                />
                <p>Affordability </p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason_for_location"
                  name="No rental overhead"
                />
                <p>No rental overhead </p>
              </div>
            </div>
          </div>
          {/* {market_research} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Market research">Market research: </label>
            </div>

            <select name="market_research">
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

            <select name="primary_market">
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

            <input type="text" name="customers" />
          </div>
          {/* {season of high sale} */}
          <div className="form_inputdiv">
            <div className="form_labeldiv">
              <label htmlFor="Seasons of high sales">
                Seasons of high sales:{" "}
              </label>
            </div>

            <select name="seasonality">
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

            <select name="competition">
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

            <input type="text" name="suppliers" />
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
                  id="scaleup_potential"
                  name="Distribution of marketing material "
                />
                <p>Distribution of marketing material</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="storefront/business branding"
                />
                <p> storefront/business branding</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="seasonal discount and offer"
                />
                <p> seasonal discount and offer</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="Cross-promotion"
                />
                <p> Cross-promotion</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="Digital Marketing"
                />
                <p> Digital Marketing</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="Word of mouth"
                />
                <p> Word of mouth</p>
              </div>
            </div>
          </div>
          {/* {scaleup potential} */}
          <div className="form_inputdiv">
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
                  name="increasing varity of product"
                />
                <p>increasing varity of product</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="opening more outlets"
                />
                <p> opening more outlets</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="growing scale of operation"
                />
                <p> growing scale of operation</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="building value chain int"
                />
                <p> building value chain int</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="scaleup_potential"
                  name="allied revenue streams"
                />
                <p> allied revenue streams</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
