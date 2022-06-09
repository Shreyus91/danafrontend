import React from "react";
import {
  Page,
  Text,
  Document,
  View,
 
} from "@react-pdf/renderer";

const PdfDoc = ({x,setX,bdNumber,setBdNumber}) => {
  

  

  
    return (
      <React.Fragment>
        <Document>
          <Page>
            <View
              style={{
                margin: "10px",
                border: "1px solid black",
              }}
            >
              <View style={{ flexDirection: "row" }}>
               
                <View style={{ flex: 1 }}>
                  <Text>Spicer Heavy Axle and Brake Division dynamic content = {x}</Text>
                </View>
              </View>

              {/* axle housing image */}

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text>Axle Housing Number dynamic content = {bdNumber}</Text>
                </View>
                
              </View>
            </View>
          </Page>
        </Document>

      
      </React.Fragment>
    );
};

export default PdfDoc;
