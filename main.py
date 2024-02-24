from Data_Collection.data_collect import data_collect;
from Algo.algo import FWAlgorithm;

sample_dictionary=data_collect("Fullerton,California,USA",33.8781, -117.87957,33.87827, -117.87968,500)


"""
The above function returns the following like:
Sample Distance Matrix={(11203244427, 11203244428): 14.239, 
(11203244428, 3077720345): 8.466,
(3077720345, 11203244429): 8.662,
(3077720345, 3583764515): 141.787,
(3583764515, 122562951): 13.611,
(122562951, 9393624778): 7.306,
(9393624778, 11203244426): 140.612,
(11203244426, 9393624783): 12.51,
(9393624783, 9393624786): 80.983,
(9393624786, 3533840250): 7.591,
(3533840250, 3077720341): 53.885,
(3077720341, 122900932): 16.677,
(122900932, 11203244432): 10.447,
(11203244432, 11203244434): 19.303,
(11203244434, 9393624802): 15.263,
(9393624802, 9393624804): 12.616,
(9393624804, 9393624805): 22.192,
(9393624805, 9393624806): 38.901,
(9393624806, 9393624808): 52.561, 
(9393624808, 9393624809): 23.008,
(9393624809, 11203244429): 7.738,and many more}
"""

fw_obj=FWAlgorithm()
#Test Dict
#sample_dictionary={(1,2):8,(2,3):1,(1,4):1,(3,1):4,(4,3):9,(4,2):2}

#sample_dictionary={(1,2):1,(2,3):-1,(3,4):-1,(4,1):-1}
# sample_dictionary={(101,102):5,(101,104):6,(102,105):7,(102,103):1,(103,101):3,(103,104):4,(104,105):3,(104,103):2,(105,104):5,(105,101):2}
#sample_dictionary={(1,2):5,(1,4):6,(2,5):7,(2,3):1,(3,1):3,(3,4):4,(4,5):3,(4,3):2,(5,4):5,(5,1):2}
a=fw_obj.initalize(sample_dictionary)
# print(fw_obj.display_path_matrix())
a,b=fw_obj.compute_distance_matrix()
print("Relaxation attempts avoided: ",a)
print(a)
print('--------------------------------------------------------')
# print(b)

"""
#print("Relaxation attempts avoided: ",a)
#print('--------------------------------------------------------')
#print(b)
#fw_obj.display_distance_matrix()
#a,b=fw_obj.compute_distance_matrix()
#print("Relaxation attempts avoided: ",a)
#print(a)
#print('--------------------------------------------------------')
#print(b)
#print(fw_obj.final_path_matrix_backup)
#fw_obj.remove_edges([(3,4),(2,5),(2,3)])
a=fw_obj.remove_edges([(102,103),(103,104),(102,105)])
print(a)
#fw_obj.remove_edges([(3,1)])
#print(a)
print('--------------------------------------------------------')
#print(b)
a=fw_obj.add_edges({(102,103):0.5})
print(a)
#fw_obj.add_edges([(2,3),(2,5),(3,4),(3,1)])
#a,b=fw_obj.add_edges({(102,103):0.5})
#a,b=fw_obj.add_edges({(102,103):0.5,(105,103):3})
#fw_obj.add_edges([(3,4)])
#fw_obj.add_edges([(2,5)])
#fw_obj.add_edges([(3,1)])
#fw_obj.add_edges([(3,4)])

#fw_obj.remove_edges([(1,2),(4,2)])
#fw_obj.add_edges([(1,2)])
#fw_obj.add_edges([(4,2)])
#print(fw_obj.initial_path_matrix_backup)
#print(fw_obj.adjacency_matrix)

#print(fw_obj.final_path_matrix_backup)
#print(str([1,2,3])[1:-1].find(str([1,3])[1:-1]))
#The find() method returns the index of first occurrence of the substring (if found). If not found, it returns -1.

"""

