import { screen, render, fireEvent } from '@testing-library/react';
import CartItem from './cart-item';

const product = {
  title: 'Classic watch',
  price: '123.00',
  image:
    'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  description: 'Classic watch',
};

const renderCartItem = () => {
  render(<CartItem product={product} />);
};

describe('CartItem', () => {
  it('should render CartItem', () => {
    renderCartItem();
    expect(screen.getByTestId('cart-item')).toBeInTheDocument();
  });

  it('should render CartItem with product', () => {
    renderCartItem();

    expect(screen.getByText(new RegExp(product.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(product.price, 'i'))).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveProperty('src', product.image);
    expect(screen.getByTestId('image')).toHaveProperty('alt', product.description);
  });
});
