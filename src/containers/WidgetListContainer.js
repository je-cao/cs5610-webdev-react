import React from "react";
import connect from "react-redux/lib/connect/connect";
import WidgetList from "../Components/WidgeList";

const stateToPropertyMapper =(state) => ({
    widgets:state.widgetsReducer.widgets
})

export default connect(
    stateToPropertyMapper
)
(WidgetList)