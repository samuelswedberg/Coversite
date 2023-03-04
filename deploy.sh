echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* joker@192.168.0.21:/var/www/samuelswedberg.com

echo "Done!"