for hour in $(seq 1 12)
  do for minute in $(seq 0 59)
    do
    echo -e "$hour:$minute=$(curl -s http://localhost:8080/clock/$hour/$minute)" >> converter.txt
    echo -e "Test $hour:$minute\n"
    done
  done
 echo "#######################################"
 echo "###      Test complete             ####"
 echo "#######################################"
 cat converter.txt | less