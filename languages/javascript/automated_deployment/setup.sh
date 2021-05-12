mkdir live stage

git clone $1  repository
cd repository
gitrepo=$(basename -s .git `git config --get remote.origin.url`)
cd ..

cp -a  repository/. ./stage/${gitrepo}
cp -a  repository/. ./live/${gitrepo}
rm -rf ./repository

mkdir scripts/
cd scripts

touch ./deploy_stag.sh
touch ./deploy_prod.sh

chmod +x ./deploy_prod.sh
chmod +x ./deploy_stag.sh


echo "
#!/bin/bash
echo "Deploying stage your_repo"

cd ../stage/${gitrepo} \
&& git checkout dev \
&& git pull \
&& npm i \
&& npm run build \
&& (pm2 stop your_repo_stage || true) \
&& echo 'Installing:  done.' \
&& (pm2 delete your_repo_stage || true) \
&& NODE_ENV=development pm2 --name your_repo_stage start npm -- start \
&& echo "your_repo deployed successfully"
" > deploy_stag.sh

echo "
#!/bin/bash
echo "Deploying Production your_repo"

cd ../live/${gitrepo} \
&& git checkout dev \
&& git pull \
&& npm i \
&& npm run build \
&& (pm2 stop your_repo_stage || true) \
&& echo 'Installing:  done.' \
&& (pm2 delete your_repo_stage || true) \
&& NODE_ENV=development pm2 --name your_repo_stage start npm -- start \
&& echo "your_repo deployed successfully"
" > deploy_prod.sh

bash ./scripts/deploy_stag


