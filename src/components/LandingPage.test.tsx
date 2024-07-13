import { render, screen } from "@testing-library/react"
import LandingPage from "./LandingPage"

test ('renders appropriate heading', () => {
    render(<LandingPage />);
    const headingElement = screen.getByText('Welcome to My Cash Card App');
    expect(headingElement).toBeInTheDocument();
});