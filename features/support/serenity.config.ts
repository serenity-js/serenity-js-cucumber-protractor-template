import { Before, setDefaultTimeout } from '@cucumber/cucumber';
import { engage } from '@serenity-js/core';

import { Actors } from '../../test';

Before(() => engage(new Actors()));

setDefaultTimeout(15000);
