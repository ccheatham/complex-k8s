 docker build -t ccheatham/complex-client:latest -t ccheatham/complex-client:$SHA -f ./client/Dockerfile ./client
 docker build -t ccheatham/complex-server:latest t ccheatham/complex-server:$SHA  -f  ./server/Dockerfile ./server
 docker build -t ccheatham/complex-worker:latest -t ccheatham/complex-worker:$SHA -f ./worker/Dockerfile ./worker
 docker push ccheatham/complex-client:latest
 docker push ccheatham/complex-server:latest
 docker push ccheatham/complex-worker:latest
  docker push ccheatham/complex-client:$SHA
 docker push ccheatham/complex-server:$SHA
 docker push ccheatham/complex-worker:$SHA
 kubectl apply -f ./k8s
 kubectl set image deployments/server-deployment server=ccheatham/complex-server
