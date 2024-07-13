import { render, screen } from "@testing-library/react"
import LandingPage from "./LandingPage";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe('LandingPage component Tests', () => {
    test('renders appropriate heading and button', () => {
        render(<LandingPage />);
        const headingElement = screen.getByText('Welcome to My Cash Card App');
        const loginButton = screen.getByRole('button', { name: 'Login' });
    
        expect(headingElement).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });

    test('login button naviagets to /cashcards on click', () => {
        const mockNavigate = jest.fn();
        jest.mock('react-router-dom', () => ({
            useNavigate: () => mockNavigate
        }));
        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        );
        const loginButton = screen.getByRole('button', { name: 'Login' });
        userEvent.click(loginButton);

        expect(mockNavigate).toHaveBeenCalledWith('/cashcards');
    });
});