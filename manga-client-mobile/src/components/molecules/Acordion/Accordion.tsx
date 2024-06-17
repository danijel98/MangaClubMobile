import { FC, useState } from "react";

import AccordionCollapsible from "react-native-collapsible/Accordion";

import { View, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface IAcrodion {
  data: any,
  renderHeader: any,
  renderContent: any,
  expandMultiple?: boolean,
  width?: number,
}

const Accordion: FC<IAcrodion> = ({ data, renderHeader, renderContent, expandMultiple = false, width = 85 }) => {

  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  return (
    <View style={{ alignSelf: "center", width: wp(width) }}>
      <AccordionCollapsible
        activeSections={activeSections}
        sections={data}
        touchableComponent={TouchableOpacity}
        expandMultiple={expandMultiple}
        renderHeader={renderHeader}
        renderContent={renderContent}
        duration={200}
        onChange={setSections}
        align="center"
      />
    </View>
  );
};

export default Accordion;
