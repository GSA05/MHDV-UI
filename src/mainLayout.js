/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Layout from "material-ui-layout";

import MainAppBar from "./mainAppBar";
// import MainFooter from "./mainFooter";
// import MainDrawer from "./mainDrawer";

class AppLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout
        stickyFooter // default false
        mainGrow // default true
        appBarPosition="fixed" // default value
        appBarContent={<MainAppBar />} // If no content it will render null
        // appBarProps={/* props to the AppBar wrapper component eg. color, className */}

        // footerContent={<MainFooter />} // If no content it will render null
        // footerProps={/* props to the Footer wrapper component eg. color, className */}

        // leftDrawerUnder // default false
        // leftDrawerContent={<MainDrawer />} // If no content it will render null
        // leftDrawerType="permanent" // default temporary

        // For state control the layout can either be controlled from the outside using e.g. Redux
        // or internally managed. If it is not specified, then it will be self managed.
        // If you want to control it externally you'll have to use this props.
        // Check the docs for more details
        // leftDrawerOpen={/* Add here your left drawer state*/}
        // onLeftDrawerOpenChange={/* Add here you function to update the left drawer state*/}
        // rightDrawerOpen={/* Add here your right drawer state*/}
        // onRightDrawerOpenChange={/* Add here you function to update the right drawer state*/}
      >
        {children}
      </Layout>
    );
  }
}

export default AppLayout;
