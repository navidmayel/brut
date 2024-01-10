import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';

describe('App healthcheck', () => {
    it('App renders successfully when there isn\'t a token', () => {
        render(
            <App />
        );
        expect(screen.getByText(/Brut/)).toBeInTheDocument();
    });
    it('App renders successfully when there is a token', async () => {

        const mockParentComponent = {token: 'token'};

        const mockParentComponentContext = {
            Provider: ({ children }: { children: any }) => children,
            Consumer: ({ children }: { children: any }) => children(mockParentComponent)
        }


       await render(
        <mockParentComponentContext.Provider>
           { () => <App /> }
        </mockParentComponentContext.Provider>

        );
        expect(screen.queryByText(/Brut/)).not.toBeInTheDocument();
    });
});