import React from "react";
import Helmet from "react-helmet";

const Embed = () => {
  return (
    <>
      <Helmet>
        {/* <title>Page Two</title>
        <style>{`.vagaro a {font-size:10px; color:#AAA; text-decoration:none;}`}</style>
        <script
          type="text/javascript"
          src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnC30tDZCcT3q"
        ></script> */}
        <script>
          {`window.VIDEOASK_EMBED_CONFIG = {
              kind: "widget",
              url: "https://ask.gathermed.com/fi4h8ny8z",
              options: {
                widgetType: "VideoThumbnailExtraLarge",
                text: "",
                backgroundColor: "#0FB48F",
                position: "bottom-right",
                dismissable: true,
              },
            }
          `}
        </script>
        <script src="https://www.videoask.com/embed/embed.js"></script>
      </Helmet>
    </>
  );
};

export default Embed;
