const http = require('http');
const createHandler = require('github-webhook-handler');
const shell = require('shelljs');


const {MY_Secret} = process.env;
const {Repo_NAME} = process.env;

const PORT = process.env.PORT || 6769;

var handler = createHandler({path: '/', secret: MY_Secret});

http.createServer(function(req,res){
  handler(req,res, function(err){
    res.statusCode = 404
    res.end("no such location");
  })
}).listen(PORT);

handler.on('error', function(err){
 console.error("Error:", err.message);
})

handler.on('pull_request', function(event){
  const repository = event.payload.repository.name;
  const action = event.payload.action;

  console.log('Received a Pull Request for %s to %s', repository, action);
  // the action of closed on pull_request event means either it is merged or declined
  if (repository === REPO_NAME && action === 'closed') {
    // we should deploy now
    shell.cd('..');
    shell.exec('~/scripts/deploy_stage');
  }
})
