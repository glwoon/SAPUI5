sap.ui.define([
	"sap/ui/core/Renderer"
], function(Renderer) {

	var FragmentControlRenderer = Renderer.extend("sap.ui.demo.wt.FragmentControlRenderer", {

		render: function(oRenderManager, oControl) {

			// return immediately if control is invisible, do not render any HTML
			if (!oControl.getVisible()) {
				return;
			}

			// start opening tag
			oRenderManager.write("<div");

			// write control data
			oRenderManager.writeControlData(oControl);

			// write classes
			oRenderManager.writeClasses();

			// write styles
			oRenderManager.addStyle("width", oControl.getWidth());
			oRenderManager.addStyle("height", oControl.getHeight());
			oRenderManager.writeStyles();

			// end opening tag
			oRenderManager.write(">");

			// render fragment controls (@see sap.ui.fragment.FragmentControl.metadata.properties._aFragmentControls)
			if (Array.isArray(oControl._aFragmentControls)) {
				oControl._aFragmentControls.forEach(function(oFragmentControl) {
					oRenderManager.renderControl(oFragmentControl);
				});
			}

			// write closing tag
			oRenderManager.write("</div>");
		}

	});

	return FragmentControlRenderer;
});