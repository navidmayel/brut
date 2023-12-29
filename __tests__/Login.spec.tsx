import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Login from '../src/components/Login';

describe('Login health', () => {
    it('Login renders successfully', () => {
        render(
            <Login />
        );
        expect(screen.getByTest(/brut/)).toBeInDocument();
    });
});