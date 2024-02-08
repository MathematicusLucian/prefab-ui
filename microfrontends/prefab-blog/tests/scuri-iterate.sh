# # sh scrui-iterate.sh
for f in $(find ./src/app/ -name '*.ts'); do 
    tmp=${f}
    if [[ ${f} =~ "component.ts" ]]; then
        b=${f%.component.ts*}
        c=${b##*/}
        echo ${c}
        path=${b%/*}
        spec=${path}
        spec+="/"
        spec+=${c}
        spec+=".component.spec.ts"
        exists=0
        for f2 in $(find ./src/app/ -name '*.ts'); do 
            if [ "$f2" = "$spec" ]; then
                exists=1
            fi
        done
        if [ ${exists} = 0 ]
        then
            echo " -- spec does not exist: "
            ng g scuri:spec --name ${spec} 
        else
            echo " -- spec exists: "
            ng g scuri:spec --name ${spec} --update
        fi
    fi
done;