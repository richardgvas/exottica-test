import { render } from '@testing-library/react';
import App from './App';

describe('when it renders',()=>{
    const {container} = render(<App/>);
    test('it is in thd document',()=>{
        expect(container.querySelector('div')).toBeInTheDocument()
    })
})