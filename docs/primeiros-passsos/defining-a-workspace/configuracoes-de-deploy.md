# Setting a Cluster

It is necessary to register cluster ****[**Kubernetes**](https://kubernetes.io/) credentials to configure your workspace. These are specific configuration to each Continuous Deployment \(CD\) tool that are integrated with Charles, at the moment it is [**Spinnaker**](https://www.spinnaker.io/) ****and Octopipe.

Octopipe was developed by Charles' team, it is light, low cost and it is able to make cluster Kubernetes deploys.

_Essas configurações são específicas para cada uma das ferramentas de Continuous Deployment \(CD\) que são integradas ao Charles, que até o momento são_ [_**Spinnaker**_](https://www.spinnaker.io/) _e Octopipe._ 

_O Octopipe foi desenvolvido pela equipe do Charles, é mais leve, de baixo custo e consegue fazer deploys em clusters Kubernetes._

_Segue abaixo o exemplo de como realizar seu deploy usando o mesmo cluster de instalação:_ 

Find below the example on how to perform your deploy using the same installation cluster:

1. On Charles front page, select **Settings** on the bottom left corner; 
2. Click on **Credentials**;
3. Click on **Add CD Configuration**;
4. Select the option **Octopipe.**

After these steps, fill out the next fields: 

1. **Name:** configuration name that will be created; 
2. **Namespace:** Define the namespace that will be used on Kubernetes cluster deploys; 
3. **Git provider**: Define the git provider \(**GitHub ou GitLab**\);
4. **Git token:**  Insert the authentication token for your git repository. This will be used to get Helm templates.  
5. Select the **Default** option.

After you finish your configuration you can associate it with a module. For more information, check the [**References**](https://docs.charlescd.io/referencia/configuracao-cd) ****page. 
