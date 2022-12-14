import subprocess

subprocess.call("npm run build", shell=True)
subprocess.call("cp .htaccess build/", shell=True)