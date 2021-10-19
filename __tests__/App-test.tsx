// Package imports
import 'react-native';
import React from 'react';

// Custom imports
import App from '@/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<App />);
});
