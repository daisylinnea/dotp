import React from 'react';

import Card from "../components/card";
import Button from "../components/Button";

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Welcome } from '@storybook/react/demo';

const storiesBtn = storiesOf('Button', module);
const storiesCard = storiesOf('Card', module);

storiesCard.addDecorator(withKnobs);


storiesBtn
  .add('Default', () => <Button title="Default"/>)
  .add('Primary', () => <Button title="Primary" type="primary"/>)
  .add('is disabled', () => <Button title="Primary" disabled={true}/>)

;

storiesCard.add('MediaCard', () => (
    <Card title={text('Title', 'Foxglove')} ingress={text('Desc', "Digitalis (/ˌdɪdʒɪˈteɪlɪs/[1] or /ˌdɪdʒɪˈtælɪs/[2]) is a genus of about 20 species of herbaceous perennials, shrubs, and biennials commonly called foxgloves.    ")} />
  ));
