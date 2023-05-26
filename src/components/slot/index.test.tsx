// libraries
import { render } from "@testing-library/react";

// types
import { Slot as SlotType } from "../../types/slots";

// thing under test
import Slot from "./";

test("renders learn react link", () => {
    const { asFragment } = render(<Slot onClick={jest.fn()} type={SlotType.MAINHAND} />);

    expect(asFragment()).toMatchSnapshot();
});
