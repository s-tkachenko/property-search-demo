import { render, screen } from '@testing-library/react';

import Layout from './Layout';

jest.mock('../Header/Header', () => () => <div>MockHeader</div>);
jest.mock('../Footer/Footer', () => () => <div>MockFooter</div>);

test('renders without crashing', () => {
  render(<Layout>ChildrenDiv</Layout>);

  expect(screen.getByText('MockHeader')).toBeInTheDocument();
  expect(screen.getByText('MockFooter')).toBeInTheDocument();
  expect(screen.getByText('ChildrenDiv')).toBeInTheDocument();
});
