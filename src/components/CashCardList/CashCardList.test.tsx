import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CashCardList from "./CashCardList";

// Mock the fetch API
global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue([
        { id: 1, amount: 100 },
        { id: 2, amount: 250 },
    ]),
}) as jest.Mock;

describe("CashCardList component Tests", () => {
    test("renders loading message initially", () => {
        render(<CashCardList />);
        const loadingMessage = screen.getByText('Loading...');
        expect(loadingMessage).toBeInTheDocument();
    });

    test("renders list of cash cards after fetching data", async () => {
        render(<CashCardList />);
        await waitFor(() => {
            const cashCardItems = screen.getAllByText(/Amount:/);

            expect(cashCardItems).toHaveLength(2);
        });
    });

    test("renders error message if fetch fails", async () => {
        // mock the fetch API to return an error
        global.fetch = jest.fn().mockRejectedValueOnce(new Error("Fetch failed"));

        render(<CashCardList />);
        await waitFor(() => {
            const errorMessage = screen.getByText("Error loading cash cards");
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test("renders appropriate heading", () => {
        render(<CashCardList />);
        const headingElement = screen.getByText("Cash Card List");

        expect(headingElement).toBeInTheDocument();
    });
});