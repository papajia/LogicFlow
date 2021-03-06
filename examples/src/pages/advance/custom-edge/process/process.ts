type RegisterProcessType = {
  LineEdge: any;
  LineEdgeModel: any;
};

export const registerProcess: any = ({
  LineEdge,
  LineEdgeModel,
}: RegisterProcessType) => {
  class ProcessView extends LineEdge {
    getAttributes() {
      const attr = super.getAttributes();
      if (attr.properties.isExecuted) {
        attr.stroke = "green";
      }
      return attr;
    }
  }
  return {
    view: ProcessView,
    model: LineEdgeModel,
  };
};
