// libraries
import { render } from "@testing-library/react";

// thing under test
import Slot from "./";

test("renders learn react link", () => {
    const { asFragment } = render(<Slot />);

    expect(asFragment()).toMatchSnapshot();
});
