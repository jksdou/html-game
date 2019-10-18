# coding:utf-8
import os

__author__ = 'can'

a = []
for i in os.listdir('./'):
    if i[-3:] in ("jpg", "png", "gif"):
        d = '\n{name: "%s", path: basePath + "%s" }' % (i[:-4], i)
        a.append(d)
print ','.join(a)