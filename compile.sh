#! /bin/sh
npm install

if [ $CIRCLE_BRANCH = "testing" ]; then
  chmod +x ./config/env_testing.sh
  . ./config/env_testing.sh
elif [ $CIRCLE_BRANCH = "staging" ]; then
  chmod +x ./config/env_staging.sh
  . ./config/env_staging.sh
elif [ $CIRCLE_BRANCH = "master" ]; then
  chmod +x ./config/env_prod.sh
  . ./config/env_prod.sh
fi

npm run build
